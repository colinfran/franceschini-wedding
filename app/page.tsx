import React, { FC } from "react"
import Image from "next/image"
import Countdown from "@/components/Countdown"

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
      <div className="m-auto mt-20 max-w-[1000px]">
        <iframe
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          frameBorder="0"
          height="500px"
          referrerPolicy="strict-origin-when-cross-origin"
          src="https://www.youtube.com/embed/NCcRc7sAOTo?si=VGrYTiTCtrPEqj1V"
          title="YouTube video player"
          width="100%"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )
}

export default Page
