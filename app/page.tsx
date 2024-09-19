import React, { FC } from "react"
import Image from "next/image"
import Countdown from "@/components/Countdown"
import { YouTubeEmbed } from "@next/third-parties/google"

const Page: FC = () => {
  return (
    <div>
      <div className="m-auto grid max-w-[1480px] grid-cols-3">
        <div className="relative flex items-center justify-end">
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
          <Countdown targetDate="7-13-2025" />
        </div>
        <div className="relative flex items-center justify-start">
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
      <div className="youtube-container m-auto my-20 max-w-[1000px]">
        <YouTubeEmbed
          videoid="NCcRc7sAOTo"
          // height={500}
        />
      </div>
    </div>
  )
}

export default Page
