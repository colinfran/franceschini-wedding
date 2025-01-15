"use client"
import React, { FC, useState } from "react"

import { Guest } from "@/types"
import ValidName from "./components/validName"
import InvalidName from "./components/invalidName"
import UnsuccessfulSubmission from "./components/unsuccessfullSubmission"
import SelectedName from "./components/selectedName"
import EnterName from "./components/enterName"
import SuccessfulSubmission from "./components/successfullSubmission"
import { useLocale } from "next-intl"

export type Statuses =
  | "enter name"
  | "valid name"
  | "invalid name"
  | "successfull submission"
  | "unsuccessfull submission"
  | "selected name"

export type Attendee = Guest | undefined

const Page: FC = () => {
  const [firstNameInitial, setFirstNameInitial] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")

  const [status, setStatus] = useState<Statuses>("enter name")

  const [listOfGuests, setListOfGuests] = useState<Guest[]>([])
  const [attendeeData, setAttendeeData] = useState<Attendee>(undefined)

  const [selectedGuest, setSelectedGuest] = useState<string>("")

  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        RSVP
      </h2>
      <div className="m-auto w-[325px] text-center">
        {status === "enter name" && (
          <EnterName
            firstNameInitial={firstNameInitial}
            lastName={lastName}
            setFirstNameInitial={setFirstNameInitial}
            setLastName={setLastName}
            setListOfGuests={setListOfGuests}
            setStatus={setStatus}
          />
        )}
        {status === "valid name" && (
          <ValidName
            firstNameInitial={firstNameInitial}
            lastName={lastName}
            listOfGuests={listOfGuests}
            setAttendeeData={setAttendeeData}
            setSelectedGuest={setSelectedGuest}
            setStatus={setStatus}
          />
        )}
        {status === "selected name" && (
          <SelectedName
            attendeeData={attendeeData}
            firstNameInitial={firstNameInitial}
            lastName={lastName}
            selectedGuest={selectedGuest}
            setStatus={setStatus}
          />
        )}
        {status === "successfull submission" && <SuccessfulSubmission />}
        {status === "unsuccessfull submission" && <UnsuccessfulSubmission />}
        {status === "invalid name" && <InvalidName />}
      </div>
    </div>
  )
}

export default Page
