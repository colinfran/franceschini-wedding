"use client"
import React, { FC, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import uniqid from "uniqid"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Guest } from "@/types"

const Page: FC = () => {
  const [name, setName] = useState<string>("")
  const [loading1, setLoading1] = useState<boolean>(false)
  const [loading2, setLoading2] = useState<boolean>(false)
  const [isAttending, setIsAttending] = useState<string>("Select attendance")
  const [status, setStatus] = useState<string>("user enter name")
  const [attendeeData, setAttendeeData] = useState<Guest | undefined>(undefined)

  const checkIfValidName = async (): Promise<void> => {
    setLoading1(true)
    try {
      const response = await fetch("/api/rsvp/name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name }),
      })
      const { found, result, error } = await response.json()
      if (error) throw Error("An error occured.")
      if (found) {
        setStatus("valid name")
        setAttendeeData(result)
      } else {
        setStatus("invalid name")
      }
    } catch (error) {
      setStatus("invalid name")
    } finally {
      setLoading1(false)
    }
  }

  const submitAttendance = async (): Promise<void> => {
    setLoading2(true)
    try {
      const response = await fetch("/api/rsvp/attending", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...attendeeData, attending: isAttending }),
      })
      const { success } = await response.json()
      if (success) {
        setStatus("successfull submission")
      } else {
        setStatus("unsuccessfull submission")
      }
    } catch (error) {
      setStatus("unsuccessfull submission")
    } finally {
      setLoading2(false)
    }
  }

  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        RSVP
      </h2>
      <div className="m-auto w-[300px] text-center">
        {status === "user enter name" && (
          <div className="flex flex-col gap-4">
            <Input
              className="text-base"
              placeholder="Enter full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button className="w-full" disabled={name === ""} onClick={checkIfValidName}>
              {loading1 && <Loader2 className="mr-2 size-4 animate-spin" />}
              Submit
            </Button>
          </div>
        )}
        {status === "valid name" && (
          <div className="flex flex-col gap-4 text-center">
            <span>{`Hey ${name}!`}</span>
            {attendeeData && attendeeData.attendees.length > 1 && (
              <div>
                <span>Your additional guests are:</span>
                <ul className="list-inside list-disc [&>li]:mt-2">
                  {attendeeData.attendees
                    .filter((el) => el !== name)
                    .map((el) => (
                      <li key={uniqid()}>{el}</li>
                    ))}
                </ul>
              </div>
            )}
            {attendeeData && attendeeData.willAttend !== "no submission" && (
              <span>
                Note that you previously submitted your attendance. Submitting again will overwrite
                the last submission.
              </span>
            )}
            <span>{"Please choose an option and submit to RSVP!"}</span>
            <Select
              value={isAttending}
              onValueChange={(value) => {
                setIsAttending(value)
              }}
            >
              <SelectTrigger className="text-base">
                <SelectValue placeholder="Select attendance" />
              </SelectTrigger>
              <SelectContent
                className="text-base"
                ref={(ref) => ref?.addEventListener("touchend", (e) => e.preventDefault())}
              >
                <SelectItem value="yes">Yes, I am attending.</SelectItem>
                <SelectItem value="no">No, I am unable to attend.</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="w-full"
              disabled={isAttending === "Select attendance"}
              onClick={submitAttendance}
            >
              {loading2 && <Loader2 className="mr-2 size-4 animate-spin" />}
              Submit
            </Button>
            {attendeeData && attendeeData.attendees.length > 1 && (
              <span className="my-4">
                Your submission will be applied to both you and your guests.
              </span>
            )}
          </div>
        )}
        {status === "successfull submission" && (
          <div>
            Your attendance has been submitted successfully. Reach out to Ornella or Colin if you
            have any questions or concerns.
          </div>
        )}
        {status === "unsuccessfull submission" && (
          <div>There was an issue submitting. Refresh and try again.</div>
        )}
        {status === "invalid name" && <div>Name was not found. Refresh and try again.</div>}
      </div>
    </div>
  )
}

export default Page
