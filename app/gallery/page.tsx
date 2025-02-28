import React, { FC } from "react"
import Gallery from "@/components/Gallery"
import { getTranslations } from "next-intl/server"
import { ResponseData } from "@/types"
import { getImages } from "@/db/getImages"

const Page: FC = async () => {
  const t = await getTranslations()
  const images: ResponseData[] = await getImages()
  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {t("Gallery")}
      </h2>
      <div className="flex justify-center p-2">
        {images.length === 0 ? (
          <div>
            <div className="lds-heart">
              <div />
            </div>
          </div>
        ) : (
          <Gallery photos={JSON.parse(JSON.stringify(images))} />
        )}
      </div>
    </div>
  )
}

export default Page
