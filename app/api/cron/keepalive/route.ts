import { pingMongo } from "@/db/ping"

export async function GET(request: Request): Promise<Response> {
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", {
      status: 401,
    })
  }
  try {
    const result = await pingMongo()
    return Response.json({ ok: true, result })
  } catch (error) {
    console.error("Mongo keepalive failed:", error)
    return new Response("Keepalive failed", { status: 500 })
  }
}
