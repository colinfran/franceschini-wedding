import { MongoClient } from "mongodb";
import { ICloud, getImages } from "icloud-shared-album";
import { v4 } from "uuid";
import { SuccessErrorResponse } from "@/types";
import { fetchImageAsBase64, wait } from "@/lib/utils";

/**
 * Fetches images from iCloud and updates the MongoDB database with new images.
 * 
 * Retrieves images from iCloud using the provided registry key, checks for new images
 * that are not already in the MongoDB database, uploads them to imgbb, and updates the database.
 * 
 * @returns {Promise<SuccessErrorResponse>} A Promise that resolves with an object indicating the success or failure of the operation.
 */

const uri = process.env.MONGODB_URI!;
const registryKey = process.env.REGISTRY_KEY!;
const imgbbKey = process.env.IMGBB_KEY!;

export const updatedImages = async (): Promise<SuccessErrorResponse> => {
  const client = new MongoClient(uri);
  try {
    console.log("Fetching data from iCloud.");
    const data: ICloud.Response = await getImages(registryKey);
    console.log("Done fetching data from iCloud.");

    console.log("Getting Data from DB.");
    await client.connect();
    const db = client.db("wedding-image-list");
    const imagesCollection = db.collection<any>("images-list");
    const images = await imagesCollection.find().toArray();
    console.log("Data from DB has been fetched.");

    let newImagesArr: any[] = [];
    const imageIds = new Set(images.map(image => image.id));

    console.log("Checking for new DB entries.");

    for (const image of data.photos) {
      if (!imageIds.has(image.photoGuid)) {
        console.log(`Image with id ${image.photoGuid} does not exist in DB.`);
        console.log(`Adding ${image.photoGuid} to DB.`);

        const urlIndex = Object.keys(image.derivatives)[0];
        const name = v4().replaceAll("-", "");
        const base64 = await fetchImageAsBase64(image.derivatives[urlIndex].url!);

        if (base64) {
          const formData = new FormData();
          formData.append("image", base64 as string);

          try {
            const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}&name=${name}`, {
              method: "POST",
              body: formData,
            });

            if (!response.ok) {
              throw new Error(`Failed to upload image to imgbb. Status: ${response.status}`);
            }

            const val = await response.json();
            if (!val.data) {
              throw new Error(`Invalid response from imgbb: ${JSON.stringify(val)}`);
            }

            newImagesArr.push({
              id: image.photoGuid,
              src: val.data.url,
              width: image.derivatives[urlIndex].width,
              height: image.derivatives[urlIndex].height,
            });

            console.log(`Image ${image.photoGuid} uploaded and added to the new images array.`);
            await wait(1000); 
          } catch (error) {
            console.error(`Error uploading image ${image.photoGuid} to imgbb:`, error);
          }
        }
      }
    }

    if (newImagesArr.length > 0) {
      await imagesCollection.deleteMany({});
      await imagesCollection.insertMany([...images, ...newImagesArr]);
      console.log("Done updating db.");
    } else {
      console.log("No new images to update in the database.");
    }

    return { success: true, error: false };
  } catch (error) {
    console.error('Error updating images:', error);
    return { success: false, error: error };
  } finally {
    await client.close();
  }
};
