import { DataResponse, RegistryItem } from "@/types"

const REGISTRY_KEY = process.env.REGISTRY_KEY!

export const getRegistryData = async (): Promise<RegistryItem[]> => {
  const response = await fetch(
    "https://www.zola.com/web-registry-api/v1/registryCollection/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        registry_key: REGISTRY_KEY,
        flattened_view: "true",
      }),
    },
  )
  const data: DataResponse = await response.json()
  // const newData = { ...data }
  // const updatedCollection = await Promise.all(
  //   data.default_collection.map(async (item: any, index: number) => {
  //     const imageUrl = item.images[0].medium // Assuming the image URL is stored here
  //     const imageResponse = await fetch(imageUrl)
  //     const buffer = await imageResponse.arrayBuffer()
  //     const { base64 } = await getPlaiceholder(Buffer.from(buffer))

  //     newData.default_collection[index].images[0].blur = base64

  //     return newData.default_collection[index]
  //   }),
  // )
  // return updatedCollection

  return data.default_collection
}
