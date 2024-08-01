import React, { FC } from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"

const Page: FC = () => {
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <Accordion className="w-[90%] md:w-[600px] lg:w-[700px]" type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-left">
            What is the date and time of the wedding?
          </AccordionTrigger>
          <AccordionContent>The wedding will take place on [date] at [time].</AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-left">Where is the wedding venue?</AccordionTrigger>
          <AccordionContent>
            The ceremony and reception will be held at [venue name and address]. A map and
            directions are provided [here/link].
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-left">Is there a dress code?</AccordionTrigger>
          <AccordionContent>
            The dress code is [dress code, e.g., cocktail attire, black-tie, casual, etc.]. We
            recommend dressing comfortably for the venue and weather.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            Are children allowed at the wedding?
          </AccordionTrigger>
          <AccordionContent>
            No, children are not invited to the wedding. It is an adults-only event, with the
            exception of children who have been specifically requested to participate in the
            ceremony.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left">
            Will there be transportation provided?
          </AccordionTrigger>
          <AccordionContent>
            No, transportation will not be provided. You can find a map and directions [here/link].
            We recommend using Uber, Lyft, or driving yourself.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left">
            Do you have any accommodation recommendations?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we have reserved rooms at [hotel name]. Please mention our wedding when booking to
            receive a special rate. Other nearby accommodations include [list of hotels].
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left">What time should I arrive?</AccordionTrigger>
          <AccordionContent>
            Please arrive by [specific time] to ensure you&apos;re seated before the ceremony
            begins.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-left">
            Will there be a reception following the ceremony?
          </AccordionTrigger>
          <AccordionContent>
            Yes, the reception will follow immediately after the ceremony at the same venue.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-left">Is there a wedding registry?</AccordionTrigger>
          <AccordionContent>
            We are registered at Zola. Your presence at our wedding is the best gift, but if
            you&apos;d like to contribute, you can find our registry{" "}
            <Link className="text-blue-800 hover:underline" href="/registry">here</Link>.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="text-left">Do you have a wedding hashtag?</AccordionTrigger>
          <AccordionContent>
            Yes! Please use our hashtag #ColinAndOrne2025 to share your photos and memories on
            social media.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger className="text-left">Can I bring a guest?</AccordionTrigger>
          <AccordionContent>
            No, please check your invitation for a &quot;+1&quot; indication. If you have any
            questions, feel free to contact us.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger className="text-left">
            Will there be any special dietary options?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we will offer [vegetarian/vegan/gluten-free/other] options. Please let us know if
            you have any specific dietary needs when you RSVP.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger className="text-left">
            What should I do if I can&apos;t attend?
          </AccordionTrigger>
          <AccordionContent>
            If you&apos;re unable to attend, please let us know as soon as possible by RSVPing on
            our website or contacting us directly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-14">
          <AccordionTrigger className="text-left">
            Can I take photos during the ceremony?
          </AccordionTrigger>
          <AccordionContent>
            We kindly ask that you refrain from taking photos during the ceremony so our
            photographers can capture the moments. Feel free to take photos during the reception!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-15">
          <AccordionTrigger className="text-left">
            Who can I contact if I have more questions?
          </AccordionTrigger>
          <AccordionContent>
            Please reach out to Ornella or Colin at thefranwedding@gmail.com if you have any
            additional questions or concerns.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default Page
