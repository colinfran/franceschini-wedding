import React, { FC } from "react"
import Image from "next/image"
import Countdown from "@/components/Countdown"

const Page: FC = () => {
  return (
    <div className="flex justify-center">
      <div className="relative flex items-center">
        <Image
          alt="profile"
          className="-scale-x-100"
          height={0}
          sizes="100vw"
          src="/leaf.png"
          style={{ maxWidth: 125, width: "100%", height: "auto" }} // optional
          width={0}
          priority
        />
      </div>
      <div className="my-6 flex flex-col items-center justify-center">
        <Countdown targetDate="7-4-2025" />
      </div>
      <div className="relative flex items-center">
        <Image
          alt="profile"
          height={0}
          sizes="100vw"
          src="/leaf.png"
          style={{ maxWidth: 125, width: "100%", height: "auto" }} // optional
          width={0}
          priority
        />
      </div>
    </div>
  )
}

export default Page
