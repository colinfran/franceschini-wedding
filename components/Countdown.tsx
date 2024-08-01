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
      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex flex-col items-center">
          <div suppressHydrationWarning={true}>{timeLeft.months}</div>
          <div>Months</div>
        </div>
        <div className="flex flex-col items-center">
          <div suppressHydrationWarning={true}>{timeLeft.days}</div>
          <div>Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div suppressHydrationWarning={true}>{timeLeft.hours}</div>
          <div>Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div suppressHydrationWarning={true}>{timeLeft.minutes}</div>
          <div>Minutes</div>
        </div>
        <div className="flex flex-col items-center">
          <div suppressHydrationWarning={true}>{timeLeft.seconds}</div>
          <div>Seconds</div>
        </div>
      </div>
    </div>
  )
}

export default Countdown
