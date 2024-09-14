"use client"
import React, { FC, useEffect, useState } from "react"
import Gallery from "@/components/Gallery"
// import Gallery from "react-photo-gallery";

const Page: FC = () => {
  const [loading, setLoading] = useState(true)
  const [images, setImages] = useState([])

  useEffect(() => {
    const getData = async (): Promise<void> => {
      try {
        const val = await fetch("/api/get-images", {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          method: "POST",
        })
        const json = await val.json()
        console.log(json)
        setLoading(false)
        setImages(json)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  return (
    <div>
      <h2 className="my-6 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Gallery
      </h2>
      <div className="flex justify-center p-2">
        {loading ? (
          <div>
            <div className="lds-heart">
              <div />
            </div>
          </div>
        ) : (
          <Gallery photos={images} />
        )}
      </div>
    </div>
  )
}

export default Page
