// "use client"
import React, { FC } from "react"
import Gallery from "@/components/Gallery"
import { getTranslations } from "next-intl/server"
import { ResponseData } from "@/types"
import { getImages } from "@/db/getImages"
// import Gallery from "react-photo-gallery";

const Page: FC = async () => {
  // const [loading, setLoading] = useState(true)
  // const [images, setImages] = useState([])
  const t = await getTranslations()
  const images: ResponseData[] = await getImages()
  // useEffect(() => {
  //   const getData = async (): Promise<void> => {
  //     try {
  //       const val = await fetch("/api/get-images", {
  //         headers: {
  //           Accept: "application/json",
  //           "Content-Type": "application/json",
  //         },
  //         method: "POST",
  //       })
  //       const json = await val.json()
  //       console.log(json)
  //       setLoading(false)
  //       setImages(json)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getData()
  // }, [])

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
