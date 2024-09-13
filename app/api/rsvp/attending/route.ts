import { NextRequest, NextResponse } from "next/server"
const url = process.env.GOOGLE_SCRIPT_ENDPOINT!

/**
 * Handles POST requests to the '/api/get-images' endpoint.
 * Fetches a list of all images from the database to display on the gallery.
 * @returns {Promise<NextResponse>} A Promise that resolves with a JSON response containing the image data or an error message if the fetch fails.
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name, attending } = await request.json()
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, attending, func: "updateForName" }),
    })
    const result = await response.text()
    const { updated } = JSON.parse(result)
    console.log(updated)
    return NextResponse.json({ error: false, success: updated })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true, success: false })
  }
}
