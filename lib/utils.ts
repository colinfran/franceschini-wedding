import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Buffer } from "buffer"
import moment from "moment-timezone"
import { CalculateProps } from "@/types"

export const cn = (...inputs: ClassValue[]): string => {
  return twMerge(clsx(inputs))
}

export const fetchImageAsBase64 = async (url: string): Promise<string> => {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const arrayBuffer = await response.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)
    return buffer.toString("base64")
  } catch (error) {
    console.error("Error fetching or converting image:", error)
    return ""
  }
}

export const calculateTimeLeft = (targetDate: string): CalculateProps => {
  const now = moment.tz("America/Los_Angeles")
  const target = moment.tz("2025-07-13 17:00", "America/Los_Angeles")
  const duration = moment.duration(target.diff(now))

  return {
    months: duration.months(),
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  }
}

export const wait = (milliseconds: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds))
}
