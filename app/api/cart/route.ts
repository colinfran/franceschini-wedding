import { cookies } from "next/headers"
import { NextResponse } from "next/server"

/**
 * Handles POST requests to the '/api/get-images' endpoint.
 * Fetches a list of all images from the database to display on the gallery.
 * @returns {Promise<NextResponse>} A Promise that resolves with a JSON response containing the image data or an error message if the fetch fails.
 */

export async function POST(): Promise<NextResponse> {
  try {
    const response = await fetch("https://www.zola.com/website-nav/web-api/v1/cart")
    if (!response.ok) {
      throw new Error("Cart retrieval failed")
    }
    const val = await response.json()
    cookies().set("sift_session_id", val.data.cartId)
    return NextResponse.json(val)
  } catch (e) {
    console.error(e)
  }
  return NextResponse.json({ success: false, message: "Error." })
}
