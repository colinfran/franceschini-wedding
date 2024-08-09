import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import { Analytics } from "@vercel/analytics/react"
import Header from "../components/Header"
import { ModalProvider } from "@/components/Modals/context"
import Modals from "@/components/Modals"
import Script from "next/script"

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
        <link href="/apple-icon-57x57.png" rel="apple-touch-icon" sizes="57x57" />
        <link href="/apple-icon-60x60.png" rel="apple-touch-icon" sizes="60x60" />
        <link href="/apple-icon-72x72.png" rel="apple-touch-icon" sizes="72x72" />
        <link href="/apple-icon-76x76.png" rel="apple-touch-icon" sizes="76x76" />
        <link href="/apple-icon-114x114.png" rel="apple-touch-icon" sizes="114x114" />
        <link href="/apple-icon-120x120.png" rel="apple-touch-icon" sizes="120x120" />
        <link href="/apple-icon-144x144.png" rel="apple-touch-icon" sizes="144x144" />
        <link href="/apple-icon-152x152.png" rel="apple-touch-icon" sizes="152x152" />
        <link href="/apple-icon-180x180.png" rel="apple-touch-icon" sizes="180x180" />
        <link href="/android-icon-192x192.png" rel="icon" sizes="192x192" type="image/png" />
        <link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
        <link href="/favicon-96x96.png" rel="icon" sizes="96x96" type="image/png" />
        <link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
        <link href="/manifest.json" rel="manifest" />
        <meta content="/ms-icon-144x144.png" name="msapplication-TileImage" />
        <Script
          src="https://d1tntvpcrzvon2.cloudfront.net/vnassets/static/js/legacyNav.d3c1298a.js"
          defer
        ></Script>
      </head>
      <body className={inter.className}>
        <div>
          <ModalProvider>
            <Header />
            <div>{children}</div>
            <Modals />
          </ModalProvider>
        </div>
        <Analytics />
      </body>
    </html>
  )
}

export default RootLayout
