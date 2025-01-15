import { useTranslations } from "next-intl"
import React, { FC } from "react"

const SuccessfulSubmission: FC = () => {
  const t = useTranslations()
  return (
    <div>
      {t("submissionSuccess")}
    </div>
  )
}

export default SuccessfulSubmission
