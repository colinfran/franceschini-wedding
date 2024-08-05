import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import { Analytics } from "@vercel/analytics/react"
import Header from "../components/Header"
import Favicon from "@/components/Favicon"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Colin & Orne",
  description: "Colin and Orne are getting married!",
}

type RootLayoutProps = {
  children?: React.ReactNode
}

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return (
    <html lang="en">
      <head>
        <Favicon />
      </head>
      <body className={inter.className}>
        <div>
          <Header />
          <div>{children}</div>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
