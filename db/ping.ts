import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI!

export const pingMongo = async (): Promise<any> => {
  const client = new MongoClient(uri)
  try {
    await client.connect()
    return await client.db("admin").command({ ping: 1 })
  } finally {
    await client.close()
  }
}
