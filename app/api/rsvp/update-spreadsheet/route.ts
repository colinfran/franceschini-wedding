import { NextRequest, NextResponse } from "next/server"
import { getAttendees } from "@/db/getAttendees"

/**
 * Handles GET requests to the '/api/rsvp/update-spreadsheet' endpoint.
 * Retrieves the list of attendees from the database and formats it.
 * @param {NextRequest} request - The incoming request object, expected to contain a JSON payload with the name to search for.
 * @returns {Promise<NextResponse>} A Promise that resolves to a JSON response containing:
 *   - `formattedData`: An array of arrays, each containing the attendee's ID, list of attendees, and attendance status.
 *   - `error`: An object indicating an error if the operation fails.
 */

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const attendees = await getAttendees()
    const dataRows = attendees.guests.map((item) => [item.attendees.join(", "), item.willAttend])
    const headers = ["Names", "Will Attend"]
    const formattedData = [headers, ...dataRows]
    return NextResponse.json(formattedData)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true })
  }
}
