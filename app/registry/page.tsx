"use client"
import React, { FC, useEffect, useState } from "react"

const Page: FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://widget.zola.com/js/widget.js?v=2"
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
      <div className={`ZolaRegistry w-full ${loading ? "invisible" : "visible"}`}>
        <a className="zola-registry-embed" data-registry-key={registryKey} href={url}>
          Our Zola Wedding Registry
        </a>
      </div>
    </div>
  )
}

export default Page
