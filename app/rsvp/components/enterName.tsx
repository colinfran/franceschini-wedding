import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React, { FC, useState } from "react"
import { Statuses } from "../page"
import { Guest } from "@/types"
import { Loader2 } from "lucide-react"
import { useLocale, useTranslations } from "next-intl"

type EnterNameProps = {
  firstNameInitial: string
  setFirstNameInitial: (val: string) => void
  lastName: string
  setLastName: (val: string) => void
  setStatus: (status: Statuses) => void
  setListOfGuests: (guest: Guest[]) => void
}

const EnterName: FC<EnterNameProps> = ({
  firstNameInitial,
  setFirstNameInitial,
  lastName,
  setLastName,
  setStatus,
  setListOfGuests,
}) => {
  const [loading, setLoading] = useState<boolean>(false)
  const t = useTranslations()
  const locale = useLocale()

  const checkIfValidName = async (): Promise<void> => {
    setLoading(true)
    try {
      const response = await fetch("/api/rsvp/name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstNameInitial: firstNameInitial.toLowerCase(),
          lastName: lastName.toLowerCase().replace(/’/g, "'"),
        }),
      })
      const { found, result, error } = await response.json()
      console.log("here", { found, result, error })
      if (error) throw Error("An error occured.")
      if (found) {
        console.log("found and setting status to valid name")
        setStatus("valid name")
        setListOfGuests(result)
      } else {
        setStatus("invalid name")
      }
    } catch (error) {
      setStatus("invalid name")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row gap-2">
        <Input
          className={`${locale === "en" ? "w-[110px]" : "w-[135px]"} text-base`}
          maxLength={1}
          placeholder={t("First initial")}
          value={firstNameInitial}
          onChange={(e) => setFirstNameInitial(e.target.value)}
        />
        <Input
          className="text-base"
          placeholder={t("Last name")}
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              checkIfValidName()
            }
          }}
        />
      </div>
      <Button
        className="w-full"
        disabled={firstNameInitial === "" || lastName === ""}
        onClick={checkIfValidName}
      >
        {loading && <Loader2 className="mr-2 size-4 animate-spin" />}
        {t("Submit")}
      </Button>
    </div>
  )
}

export default EnterName
