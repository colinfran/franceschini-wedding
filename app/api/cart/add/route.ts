import { NextResponse } from "next/server"
import { cookies } from "next/headers"

/**
 * Handles POST requests to the '/api/get-images' endpoint.
 * Fetches a list of all images from the database to display on the gallery.
 * @returns {Promise<NextResponse>} A Promise that resolves with a JSON response containing the image data or an error message if the fetch fails.
 */
export async function POST(request: Request): Promise<NextResponse> {
  // Retrieve CSRF token from cookies
  const cartIdCookie = cookies().get("sift_session_id")
  const csrfCookie = cookies().get("CSRF-TOKEN")
  const csrfToken = csrfCookie ? csrfCookie.value : ""
  const cartIdToken = cartIdCookie ? cartIdCookie.value : ""
  // console.log("CSRF Token:", csrfToken);

  const body = await request.json()

  try {
    // Perform the fetch request to Zola API
    const response = await fetch("https://www.zola.com/api/v0/cart/item", {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Referer: "https://www.zola.com/wedding/colinandornella/registry",
        "x-csrf-token": csrfToken, // Now a string
        Cookie: `CSRF-TOKEN=${csrfToken}; sift_user_id=${cartIdToken}`, // Ensure this is formatted as a string
      },
      credentials: "same-origin",
    })

    if (!response.ok) {
      const errorDetails = await response.text() // Get response text for debugging
      throw new Error(`Request to Zola API failed with status ${response.status}: ${errorDetails}`)
    }

    // Parse and return the JSON response
    const val = await response.json()
    return NextResponse.json(val)
  } catch (e) {
    console.error("Error details:", e.message)
    return NextResponse.json({ success: false, message: "Error. Request to Zola API failed." })
  }
}
