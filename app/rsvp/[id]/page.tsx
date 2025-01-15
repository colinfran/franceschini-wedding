import React, { FC } from "react"
import { checkIfValidId } from "@/lib/server-utils"
import QrRsvp from "./components/qr-rsvp"
import { redirect } from "next/navigation"

type Props = {
  params: {
    id: string
  }
}

const Page: FC<Props> = async ({ params: { id } }) => {
  const data = await checkIfValidId(id)
  if (!data.valid) {
    redirect("/rsvp")
  }
  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        RSVP
      </h2>
      <div className="m-auto w-[325px] text-center">
        <QrRsvp data={data} />
      </div>
    </div>
  )
}

export default Page
