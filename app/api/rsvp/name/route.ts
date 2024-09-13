import { NextRequest, NextResponse } from "next/server"
import { findAssociatedAttendees } from "@/lib/server-utils"
import { getAttendees } from "@/db/getAttendees"

/**
 * Handles POST requests to the '/api/rsvp/name' endpoint.
 * Checks if a given name exists in the RSVP list by querying the database
 * and comparing the name with the list of attendees.
 * @param {NextRequest} request - The incoming request object containing the name to search for.
 * @returns {Promise<NextResponse>} A Promise that resolves with a JSON response indicating:
 *   - `found`: A boolean indicating if the name was found in the RSVP list.
 *   - `result`: The associated attendee data if the name was found; otherwise `undefined`.
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { name } = await request.json()
    const attendees = await getAttendees()
    const result = findAssociatedAttendees(attendees, name)
    if (result) {
      return NextResponse.json({ error: false, found: true, result })
    }
    return NextResponse.json({ error: false, found: false, result: undefined })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true, found: false, result: undefined })
  }
}
