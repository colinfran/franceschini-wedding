import { useTranslations } from "next-intl"
import React, { FC } from "react"

const UnsuccessfulSubmission: FC = () => {
  const t = useTranslations()
  return <div>{t("submissionIssue")}</div>
}

export default UnsuccessfulSubmission
