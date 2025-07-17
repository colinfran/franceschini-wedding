"use client"
import React, { FC } from "react"
import { useTranslations } from "next-intl"

const Countdown: FC = () => {
  // const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate))
  // const [mounted, setMounted] = useState(false)
  const t = useTranslations()

  // useEffect(() => {
  //   setMounted(true)
  // }, [])

  // useEffect(() => {
  //   if (mounted) {
  //     setTimeLeft(calculateTimeLeft(targetDate)) // Update once on mount
  //     const timer = setInterval(() => {
  //       setTimeLeft(calculateTimeLeft(targetDate))
  //     }, 1000)

  //     return () => clearInterval(timer)
  //   }
  // }, [mounted, targetDate])

  return (
    <div>
      <div className="page-title mb-6 flex flex-col text-center leading-[1.43] tracking-[normal]">
        <h2 className="text-xl xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          {t("July 13th, 2025")}
        </h2>
        <h2 className="text-lg">Stonetree Estate</h2>
        <h2 className="text-sm">5:00PM</h2>
      </div>
      {/*<div
        className={`grid grid-cols-1 items-center gap-4 ${locale === "en" ? "md:grid-cols-5" : "md:grid-cols-[repeat(5,50px)]"}`}
      >
        <div className="flex flex-col items-center">
          <div className="text-4xl">
            {mounted ? timeLeft.months : <Skeleton className="h-[40px] w-[44px]" />}
          </div>
          <div>{t(timeLeft.months > 1 ? "time.Months" : "time.Month")}</div>
        </div>
        <div className="flex min-w-fit flex-col items-center">
          <div className="text-4xl">
            {mounted ? timeLeft.days : <Skeleton className="h-[40px] w-[44px]" />}
          </div>
          <div>{t(timeLeft.days > 1 ? "time.Days" : "time.Day")}</div>
        </div>
        <div className="flex min-w-fit flex-col items-center">
          <div className="text-4xl">
            {mounted ? timeLeft.hours : <Skeleton className="h-[40px] w-[44px]" />}
          </div>
          <div>{t(timeLeft.hours > 1 ? "time.Hours" : "time.Hour")}</div>
        </div>
        <div className="flex min-w-fit flex-col items-center">
          <div className="text-4xl">
            {mounted ? timeLeft.minutes : <Skeleton className="h-[40px] w-[44px]" />}
          </div>
          <div>{t("time.Min")}</div>
        </div>
        <div className="flex min-w-fit flex-col items-center">
          <div className="text-4xl">
            {mounted ? timeLeft.seconds : <Skeleton className="h-[40px] w-[44px]" />}
          </div>
          <div>{t("time.Sec")}</div>
        </div>
      </div>*/}
    </div>
  )
}

export default Countdown
