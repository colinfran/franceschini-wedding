import { NextResponse } from "next/server"

/**
 * Handles POST requests to the '/api/get-images' endpoint.
 * Fetches a list of all images from the database to display on the gallery.
 * @returns {Promise<NextResponse>} A Promise that resolves with a JSON response containing the image data or an error message if the fetch fails.
 */

export async function GET(): Promise<NextResponse> {
  try {
    const response = await fetch("https://www.zola.com/website-nav/web-api/legacyNav")
    if (!response.ok) {
      throw new Error("Request to Zola API failed")
    }
    const val = await response.text()
    console.log(val)
    // return NextResponse.json({html:val}, { headers: response.headers})
    const res = new NextResponse(val)
    response.headers.set("Content-Type", "text/html; charset=utf-8")
    return res
  } catch (e) {
    return NextResponse.json({ success: false, message: "Error. Request to Zola API failed." })
  }
  return NextResponse.json({ success: false, message: "Error. Request to Zola API failed." })
}
