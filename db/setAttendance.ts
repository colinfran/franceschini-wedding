import { findAssociatedAttendees } from "@/lib/server-utils"
import { Guest, GuestList, ResponseData } from "@/types"
import moment from "moment"
import { MongoClient, ObjectId } from "mongodb"

const uri = process.env.MONGODB_URI!

/**
 * Sets the attendance status for a guest in the MongoDB database.
 * @param {string} id - The ID of the guest.
 * @param {string} willAttend - The attendance status ('yes' or 'no').
 * @returns {Promise<boolean>} A Promise that resolves with `true` if the update was successful, `false` otherwise.
 */

export const setAttendance = async (id: string, willAttend: string): Promise<boolean> => {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    const db = client.db("wedding-rsvp")
    const rsvpCollection = db.collection<any>("rsvp")
    const result = await rsvpCollection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { 
        willAttend,
        date: moment().format('LLL')
       } },
      { upsert: false }
    )
    return result.matchedCount > 0
  } finally {
    await client.close()
  }
}
