import React, { FC } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { getTranslations } from "next-intl/server"

const Page: FC = async () => {
  const t = await getTranslations()
  return (
    <div className="flex flex-col items-center justify-center p-8 pt-0">
      <h2 className="mb-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {t("FAQs")}
      </h2>
      <Accordion className="w-[90%] md:w-[600px] lg:w-[700px]" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">{t("1-q")}</AccordionTrigger>
          <AccordionContent>{t("1-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">{t("2-q")}</AccordionTrigger>
          <AccordionContent>
            {t("2-a")}
            <Link
              className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="https://maps.app.goo.gl/3sz5jjB6FsVPSCw97"
              target="_blank"
            >
              {t("here")}
            </Link>
            .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">{t("3-q")}</AccordionTrigger>
          <AccordionContent>{t("3-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">{t("4-q")}</AccordionTrigger>
          <AccordionContent>{t("4-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">{t("5-q")}</AccordionTrigger>
          <AccordionContent>
            {t("5-a")}
            <Link
              className="inline-flex items-center font-medium text-blue-600 hover:underline dark:text-blue-500"
              href="https://maps.app.goo.gl/3sz5jjB6FsVPSCw97"
              target="_blank"
            >
              {t("here")}
            </Link>
            {t("recommendUber")}
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">{t("6-q")}</AccordionTrigger>
          <AccordionContent>{t("6-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left">{t("7-q")}</AccordionTrigger>
          <AccordionContent>{t("7-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-left">{t("8-q")}</AccordionTrigger>
          <AccordionContent>{t("8-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-left">{t("9-q")}</AccordionTrigger>
          <AccordionContent>
            {t("9-a")}
            <Link className="text-blue-800 hover:underline" href="/registry">
              {t("here")}
            </Link>
            .
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="text-left">{t("10-q")}</AccordionTrigger>
          <AccordionContent>{t("10-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger className="text-left">{t("11-q")}</AccordionTrigger>
          <AccordionContent>{t("11-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger className="text-left">{t("12-q")}</AccordionTrigger>
          <AccordionContent>{t("12-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger className="text-left">{t("13-q")}</AccordionTrigger>
          <AccordionContent>{t("13-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger className="text-left">{t("14-q")}</AccordionTrigger>
          <AccordionContent>{t("14-a")}</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger className="text-left">{t("15-q")}</AccordionTrigger>
          <AccordionContent>{t("15-a")}</AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Page
