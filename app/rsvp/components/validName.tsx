import React, { FC } from "react"
import { Button } from "@/components/ui/button"
import { Attendee, Statuses } from "../page"
import { Guest } from "@/types"

type ValidNameProps = {
  firstNameInitial: string
  lastName: string
  setSelectedGuest: (guest: string) => void
  setAttendeeData: (attendee: Attendee) => void
  listOfGuests: Guest[]
  setStatus: (status: Statuses) => void
}

const ValidName: FC<ValidNameProps> = ({
  firstNameInitial,
  lastName,
  setSelectedGuest,
  setAttendeeData,
  listOfGuests,
  setStatus,
}) => {
  const filteredAttendees = listOfGuests.flatMap((guest) =>
    guest.attendees.filter((attendee) => {
      const [firstName, ...lastNameParts] = attendee.split(" ")
      const lastNameFull = lastNameParts.join(" ") // Join remaining parts as the full last name

      // Check if the first name's initial matches
      const isFirstNameMatch = firstName.charAt(0) === firstNameInitial

      // Split the last name into parts for checking
      const lastNameSearchParts = lastName.split(" ")

      // Check if any part of the last name matches
      const isLastNameMatch = lastNameSearchParts.every((part) => lastNameFull.includes(part))

      return isFirstNameMatch && isLastNameMatch // Return true if both conditions are satisfied
    }),
  )

  return (
    <div className="mb-8 flex flex-col gap-4 text-center">
      <span>
        Select your name from the list below. If you do not see your name, refresh and try again.
      </span>
      {filteredAttendees.map((attendee) => {
        return (
          <Button
            className="w-full"
            key={attendee}
            onClick={() => {
              setSelectedGuest(attendee)
              setAttendeeData(listOfGuests.find((guest) => guest.attendees.includes(attendee)))
              setStatus("selected name")
            }}
          >
            {attendee}
          </Button>
        )
      })}
    </div>
  )
}

export default ValidName
