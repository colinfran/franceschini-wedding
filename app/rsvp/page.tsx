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
import { Textarea } from "@/components/ui/textarea"

const Page: FC = () => {
  const [firstNameInitial, setFirstNameInitial] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [loading1, setLoading1] = useState<boolean>(false)
  const [loading2, setLoading2] = useState<boolean>(false)
  const [isAttending, setIsAttending] = useState<string>("Select attendance")
  const [status, setStatus] = useState<string>("user enter name")
  const [listOfGuests, setListOfGuests] = useState<Guest[]>([])
  const [attendeeData, setAttendeeData] = useState<Guest | undefined>(undefined)
  const [selectedGuest, setSelectedGuest] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const textAreaPlaceholder =
    attendeeData && attendeeData.attendees.length > 1
      ? "If someone in your party can't attend, please specify here. Or leave a message."
      : "Leave a message."

  const checkIfValidName = async (): Promise<void> => {
    setLoading1(true)
    try {
      const response = await fetch("/api/rsvp/name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstNameInitial, lastName }),
      })
      const { found, result, error } = await response.json()
      if (error) throw Error("An error occured.")
      if (found) {
        setStatus("valid name")
        setListOfGuests(result)
        console.log(result)
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
      setLoading2(false)
    }
  }

  const filteredAttendees = listOfGuests.flatMap(guest =>
    guest.attendees.filter(attendee => {
      const [firstName, ...lastNameParts] = attendee.split(" ");
      const lastNameFull = lastNameParts.join(" "); // Join remaining parts as the full last name
      
      // Check if the first name's initial matches
      const isFirstNameMatch = firstName.charAt(0) === firstNameInitial;
  
      // Split the last name into parts for checking
      const lastNameSearchParts = lastName.split(" ");
  
      // Check if any part of the last name matches
      const isLastNameMatch = lastNameSearchParts.every(part => 
        lastNameFull.includes(part)
      );
  
      return isFirstNameMatch && isLastNameMatch; // Return true if both conditions are satisfied
    })
  );
  

  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        RSVP
      </h2>
      <div className="m-auto w-[325px] text-center">
        {status === "user enter name" && (
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2">
              <Input
                className="text-base w-[110px]"
                placeholder="First initial"
                value={firstNameInitial}
                onChange={(e) => setFirstNameInitial(e.target.value)}
                maxLength={1}
              />
              <Input
                className="text-base"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <Button className="w-full" disabled={firstNameInitial === "" || lastName === ""} onClick={checkIfValidName}>
              {loading1 && <Loader2 className="mr-2 size-4 animate-spin" />}
              Submit
            </Button>
          </div>
        )}
        {status === "valid name" && (
          <div className="mb-8 flex flex-col gap-4 text-center">
            <span>
              Select your name from the list below. If you do not see your name, refresh and try again.
            </span>
            {filteredAttendees.map((attendee) => {
              return (
                <Button
                  key={attendee} // Ensure each button has a unique key
                  className="w-full"
                  onClick={()=> {
                    setSelectedGuest(attendee)
                    setAttendeeData(listOfGuests.find((guest)=> guest.attendees.includes(attendee)))
                    setStatus("selected name")
                  }}
                >
                  {attendee}
                </Button>
              );
            })}
          </div>
        )}
        {status === "selected name" && (
          <div className="mb-8 flex flex-col gap-4 text-center">
            <span>{`Hey ${selectedGuest}!`}</span>
            {attendeeData && attendeeData.attendees.length > 1 && (
              <div>
                <span>Your additional guests are:</span>
                <ul className="list-inside list-disc [&>li]:mt-2">
                {attendeeData.attendees
                  .filter((el) => {
                    const [firstName, ...lastNameParts] = el.split(" ");
                    const lastNameFull = lastNameParts.join(" "); // Join remaining parts to form full last name

                    // Check if the first name's initial matches
                    const isFirstNameMatch = firstName.charAt(0) === firstNameInitial;

                    // Check if the last name matches (this can allow for partial matches if needed)
                    const isLastNameMatch = lastNameFull.includes(lastName);

                    // We want to keep attendees who do NOT match both conditions
                    return !(isFirstNameMatch && isLastNameMatch);
                  })
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
              {loading2 && <Loader2 className="mr-2 size-4 animate-spin" />}
              Submit
            </Button>
            {attendeeData && attendeeData.attendees.length > 1 && (
              <span className="my-4">
                Your submission will be applied to both you and your guests unless specified in the
                above text field.
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
