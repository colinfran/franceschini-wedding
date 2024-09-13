import { setAttendance } from "@/db/setAttendance"
import { NextRequest, NextResponse } from "next/server"

/**
 * Handles POST requests to the '/api/rsvp/attending' endpoint.
 * Updates the RSVP status for a guest.
 * @param {NextRequest} request - The incoming request object containing the RSVP data.
 * @returns {Promise<NextResponse>} A Promise that resolves with a JSON response indicating
 * whether the db update was successful
 */

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const { _id, attending } = await request.json()
    const success = await setAttendance(_id, attending)
    fetch(
      "https://script.google.com/macros/s/AKfycbyeQeeLZaY8qkQz4PvkHcclAOtFVkux1srySG9cE7CC6d9eO3jQinC4KjhUhDfqI5O1/exec",
    )
    return NextResponse.json({ error: false, success })
  } catch (err) {
    console.error(err)
    return NextResponse.json({ error: true, success: false })
  }
}
