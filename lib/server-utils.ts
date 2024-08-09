import { DataResponse, RegistryItem } from "@/types"

const registry_key = process.env.REGISTRY_LIST_KEY!

export const getRegistryData = async (): Promise<RegistryItem[]> => {
  const response = await fetch(
    "https://www.zola.com/web-registry-api/v1/registryCollection/search",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        registry_key,
        flattened_view: "true",
      }),
    },
  )
  const data: DataResponse = await response.json()
  return data.default_collection
}

export const getShoppingCart = async (): Promise<RegistryItem[]> => {
  const response = await fetch("https://www.zola.com/website-nav/web-api/v1/cart", {
    method: "GET",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const data: any = await response.json()
  return data
}
