import { NextRequest, NextResponse } from "next/server"
const url = process.env.GOOGLE_SCRIPT_ENDPOINT!

/**
 * Handles POST requests to the '/api/get-images' endpoint.
 * Fetches a list of all images from the database to display on the gallery.
 * @returns {Promise<NextResponse>} A Promise that resolves with a JSON response containing the image data or an error message if the fetch fails.
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name } = await request.json()
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, func: "checkName" }),
    })
    const result = await response.text()
    const { found } = JSON.parse(result)
    return NextResponse.json({ error: false, found })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true, found: false })
  }
}
