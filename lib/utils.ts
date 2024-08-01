import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Buffer } from "buffer"
import moment from "moment"
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
  const now = moment()
  const target = moment(targetDate, "MM-DD-YYYY")
  const duration = moment.duration(target.diff(now))

  return {
    months: duration.months(),
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  }
}
