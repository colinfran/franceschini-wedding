import { updatedImages } from "@/db/updatedImages"

/**
 * Handles GET requests to the '/api/cron' endpoint.
 * Validates the authorization header to ensure the request is from an authorized source.
 * If authorized, it runs the `updatedImages` function to fetch new images from iCloud,
 * update the MongoDB database, and responds with a success message.
 * @param {Request} request - The incoming GET request.
 * @returns {Promise<Response>} A Promise that resolves with a JSON response indicating success.
 */

export async function GET(request: Request): Promise<Response> {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    })
  }
  console.log("Running cron")
  await updatedImages()
  return Response.json({ success: true })
}
