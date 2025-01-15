"use client"

import React, { FC, useState } from "react"
import SelectedName from "../../components/selectedName"
import SuccessfulSubmission from "../../components/successfullSubmission"
import UnsuccessfulSubmission from "../../components/unsuccessfullSubmission"
import { Attendee } from "../../page"

type Props = {
  data: {
    attendee: Attendee
    valid: boolean
  }
}

const QrRsvp: FC<Props> = ({ data }) => {
  const [status, setStatus] = useState("")
  // guests will always be defined because the data is only passed if it is valid
  const guests = data.attendee!
  const firstNameInitial = guests.attendees[0].charAt(0)
  const names = guests.attendees[0].split(" ")
  const lastName = names[names.length - 1]

  if (status === "successfull submission") {
    return <SuccessfulSubmission />
  }
  if (status === "unsuccessfull submission") {
    return <UnsuccessfulSubmission />
  }
  return (
    <SelectedName
      attendeeData={guests}
      firstNameInitial={firstNameInitial}
      lastName={lastName}
      selectedGuest={guests.attendees[0]}
      setStatus={setStatus}
    />
  )
}

export default QrRsvp
