import { NextResponse } from "next/server"
import { getAttendees } from "@/db/getAttendees"

/**
 * Handles POST requests to the '/api/rsvp/update-spreadsheet' endpoint.
 * Retrieves the list of attendees from the database and formats it.
 * @returns {Promise<NextResponse>} A Promise that resolves to a JSON response containing:
 *   - `formattedData`: An array of arrays, each containing the attendee's ID, list of attendees,
 *      attendance status, and submission date.
 *   - `error`: An object indicating an error if the operation fails.
 */

export async function POST(): Promise<NextResponse> {
  try {
    const attendees = await getAttendees()
    const dataRows = attendees.guests.map((item) => [
      item.attendees.join(", "),
      item.willAttend,
      item.date,
      item.message,
    ])
    const headers = ["Names", "Will Attend", "Submission Date", "Message"]
    const formattedData = [headers, ...dataRows]
    return NextResponse.json(formattedData)
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true })
  }
}
