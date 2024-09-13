"use client"
import React, { FC, useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Loader2 } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Page: FC = () => {
  const [name, setName] = useState<string>("")
  const [loading1, setLoading1] = useState<boolean>(false)
  const [loading2, setLoading2] = useState<boolean>(false)
  const [isAttending, setIsAttending] = useState<string>("no selection")
  const [status, setStatus] = useState<string>("user enter name")

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
      const { found } = await response.json()
      if (found) {
        setStatus("valid name")
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
        body: JSON.stringify({ name, attending: isAttending === "yes" }),
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
      <div className="m-auto w-[300px] text-center">
        {status === "user enter name" && (
          <div className="flex flex-col gap-4">
            <Input
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
          <div className="flex flex-col gap-4">
            <span className="text-center">{`Hey ${name}!`}</span>
            <span className="text-center">{"Please choose an option and submit to RSVP!"}</span>
            <Select
              value={isAttending}
              onValueChange={(value) => {
                setIsAttending(value)
              }}
            >
              <SelectTrigger className="">
                <SelectValue placeholder="Select attendance" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="yes">Yes, I am attending.</SelectItem>
                <SelectItem value="no">No, I am unable to attend.</SelectItem>
              </SelectContent>
            </Select>
            <Button
              className="w-full"
              disabled={isAttending === "no selection"}
              onClick={submitAttendance}
            >
              {loading2 && <Loader2 className="mr-2 size-4 animate-spin" />}
              Submit
            </Button>
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
