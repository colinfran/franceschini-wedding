import React, { FC } from "react"
import Image from "next/image"
import Countdown from "@/components/Countdown"
import { getLocale } from "next-intl/server"
import VideoPlayer from "@/components/VideoPlayer"

const Page: FC = async () => {
  const locale = await getLocale()
  return (
    <div>
      <div className="flex justify-center py-6">
        <Image alt="Colin and Ornella" height={400} src="/colin-ornella.jpg" width={300} />
      </div>
      <div className="m-auto grid max-w-[1480px] grid-cols-3 pb-6">
        <div className={`relative flex items-center justify-end ${locale === "es" && "mr-[36px]"}`}>
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
          <Countdown locale={locale} targetDate="7-13-2025" />
        </div>
        <div
          className={`relative flex items-center justify-start ${locale === "es" && "ml-[36px]"}`}
        >
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
      <VideoPlayer />
    </div>
  )
}

export default Page
