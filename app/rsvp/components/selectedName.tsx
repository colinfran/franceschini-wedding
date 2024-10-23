import React, { FC, useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"
import uniqid from "uniqid"
import { Attendee, Statuses } from "../page"

type SelectedNameProps = {
  selectedGuest: string
  attendeeData: Attendee
  firstNameInitial: string
  lastName: string
  setStatus: (status: Statuses) => void
}

const SelectedName: FC<SelectedNameProps> = ({
  selectedGuest,
  attendeeData,
  firstNameInitial,
  lastName,
  setStatus,
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [isAttending, setIsAttending] = useState<string>("Select attendance")
  const [message, setMessage] = useState<string>("")

  const submitAttendance = async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await fetch("/api/rsvp/attending", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...attendeeData, attending: isAttending, message: message }),
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
      setLoading(false)
    }
  }

  const textAreaPlaceholder =
    attendeeData && attendeeData.attendees.length > 1
      ? "If someone in your party can't attend, please specify here. Or leave a message."
      : "Leave a message."

  return (
    <div className="mb-8 flex flex-col gap-4 text-center">
      <span>{`Hey ${selectedGuest}!`}</span>
      {attendeeData && attendeeData.attendees.length > 1 && (
        <div>
          <span>Your additional guests are:</span>
          <ul className="list-inside list-disc [&>li]:mt-2">
            {attendeeData.attendees
              .filter((el) => {
                const [firstName, ...lastNameParts] = el.split(" ")
                const lastNameFull = lastNameParts.join(" ") // Join remaining parts to form full last name

                // Check if the first name's initial matches
                const isFirstNameMatch = firstName.charAt(0) === firstNameInitial

                // Check if the last name matches (this can allow for partial matches if needed)
                const isLastNameMatch = lastNameFull.includes(lastName)

                // We want to keep attendees who do NOT match both conditions
                return !(isFirstNameMatch && isLastNameMatch)
              })
              .map((el) => (
                <li key={uniqid()}>{el}</li>
              ))}
          </ul>
        </div>
      )}
      {attendeeData && attendeeData.willAttend !== "no submission" && (
        <span>
          Note that you previously submitted your attendance. Submitting again will overwrite the
          last submission.
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
      <Textarea
        className="mt-4 min-h-[100px] text-base"
        placeholder={textAreaPlaceholder}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button
        className="w-full"
        disabled={isAttending === "Select attendance"}
        onClick={submitAttendance}
      >
        {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
        Submit
      </Button>
      {attendeeData && attendeeData.attendees.length > 1 && (
        <span className="my-4">
          Your submission will be applied to both you and your guests unless specified in the above
          text field.
        </span>
      )}
    </div>
  )
}

export default SelectedName
