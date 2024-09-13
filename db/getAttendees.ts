import { findAssociatedAttendees } from "@/lib/server-utils"
import { Guest, GuestList, ResponseData } from "@/types"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI!

/**
 * Retrieves all attendees from the MongoDB database.
 * @returns {Promise<GuestList>} A Promise that resolves with a list of attendees.
 */
export const getAttendees = async (): Promise<GuestList> => {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db("wedding-rsvp")
    const rsvpCollection = db.collection<any>("rsvp")
    const rsvpResponse= {
      guests: await rsvpCollection.find().toArray()
    }
    return rsvpResponse
  } finally {
    await client.close()
  }
}
