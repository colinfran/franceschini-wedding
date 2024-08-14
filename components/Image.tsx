"use client"
import React, { FC, useState } from "react"
import Image from "next/image"
import { RegistryItem } from "@/types"

type Props = {
  item: RegistryItem
}

const Imager: FC<Props> = ({ item }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="relative">
      <Image
        alt={item.name}
        className={`h-48 w-full ${!isLoaded ? "invisible" : "visible"}`}
        height={0}
        sizes="100vw"
        src={item.images[0].medium}
        style={{ width: "100%", height: "auto" }} // optional
        width={0}
        priority
        onLoad={() => setIsLoaded(true)}
      />
      {!isLoaded && <div className="absolute inset-0 size-full animate-pulse bg-gray-300" />}
    </div>
  )
}

export default Imager
