"use client"
import React, { useState, useEffect, FC } from "react"
import { calculateTimeLeft } from "@/lib/utils"

type Props = {
  targetDate: string
}

const Countdown: FC<Props> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate))
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div>
      <div className="flex flex-col text-center page-title mb-6 text-center leading-[1.43] tracking-[normal]">
        <div className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">July 13th, 2025</div>
        <div className="text-lg">Stonetree Estate</div>
      </div>
      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-5">
        <div className="flex flex-col items-center">
          <div className="text-4xl" suppressHydrationWarning={true}>
            {timeLeft.months}
          </div>
          <div>Months</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl" suppressHydrationWarning={true}>
            {timeLeft.days}
          </div>
          <div>Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl" suppressHydrationWarning={true}>
            {timeLeft.hours}
          </div>
          <div>Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl" suppressHydrationWarning={true}>
            {timeLeft.minutes}
          </div>
          <div>Mins</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-4xl" suppressHydrationWarning={true}>
            {timeLeft.seconds}
          </div>
          <div>Secs</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
