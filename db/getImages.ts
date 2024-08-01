import { ResponseData } from "@/types"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI!

/**
 * Retrieves all images from the MongoDB database.
 * @returns {Promise<ResponseData[]>} A Promise that resolves with an array of ResponseData containing the images.
 */
export const getImages = async (): Promise<ResponseData[]> => {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db("wedding-image-list")
    const imagesCollection = db.collection<any>("images-list")
    const images = await imagesCollection.find().toArray()
    return images
  } finally {
    await client.close()
  }
}
