/**
 * Handles POST requests to the '/api/hotel-link' endpoint.
 * Redirects the request to the URL specified in the HOTEL_URL environment variable.
 * @returns {Promise<Response>} A Promise that resolves with a redirect response to the specified URL.
 */

const url = process.env.HOTEL_URL!

export const POST = async (): Promise<Response> => {
  return Response.redirect(url)
}
