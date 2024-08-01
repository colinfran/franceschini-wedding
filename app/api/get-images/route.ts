import { getImages } from "@/db/getImages"
import { ResponseData } from "@/types"
import { NextResponse } from "next/server"

/**
 * Handles GET requests to the '/api/get-images' endpoint.
 * Fetches a list of all images from the database to display on the gallery.
 * @returns {Promise<NextResponse>} A Promise that resolves with a JSON response containing the image data or an error message if the fetch fails.
 */

export async function GET(): Promise<NextResponse> {
  try {
    const data: ResponseData[] = await getImages()
    return NextResponse.json(data)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true, success: false })
  }
}
