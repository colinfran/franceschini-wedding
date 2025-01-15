"use client"

import React, { FC, useState } from "react"
import SelectedName from "../../components/selectedName"
import SuccessfulSubmission from "../../components/successfullSubmission"
import UnsuccessfulSubmission from "../../components/unsuccessfullSubmission"

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

const QrRsvp: FC<Props> = ({ data }) => {
  const [status, setStatus] = useState("selected name")
  const firstNameInitial = data.attendee.attendees[0].charAt(0)
  const lastName =
    data.attendee.attendees[0].split(" ")[data.attendee.attendees[0].split(" ").length - 1]

  if (status === "selected name") {
    return (
      <SelectedName
        attendeeData={data.attendee}
        firstNameInitial={firstNameInitial}
        lastName={lastName}
        selectedGuest={data.attendee.attendees[0]}
        setStatus={setStatus}
      />
    )
  }
  if (status === "successfull submission") {
    return <SuccessfulSubmission />
  }
  if (status === "unsuccessfull submission") {
    return <UnsuccessfulSubmission />
  }
  return null
}

export default QrRsvp
