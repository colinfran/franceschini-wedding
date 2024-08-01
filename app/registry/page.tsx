"use client"
import { Card } from "@/components/ui/card"
import React, { FC, useEffect, useState } from "react"

const Page: FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement("script")

    script.src = "https://widget.zola.com/js/widget.js"
    script.async = true
    script.onload = () => {
      setTimeout(() => {
        setLoading(false)
      }, 500)
    }

    document.body.appendChild(script)
  }, [])

  const url = "www.zola.com/registry/colinandornella"
  const registryKey = "colinandornella"

  return (
    <div className="m-10 flex flex-col justify-center text-center">
      {loading && (
        <div>
          <div className="lds-heart">
            <div />
          </div>
        </div>
      )}
      <Card className={`ZolaRegistry w-full ${loading ? "invisible" : "visible"}`}>
        <a className="zola-registry-embed" data-registry-key={registryKey} href={url}>
          Our Zola Wedding Registry
        </a>
      </Card>
    </div>
  )
}

export default Page
