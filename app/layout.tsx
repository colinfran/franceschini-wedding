import { Inter } from "next/font/google"
import "./globals.css"
import React from "react"
import { Analytics } from "@vercel/analytics/react"
import Header from "../components/Header"
import { GoogleAnalytics } from "@next/third-parties/google"
import Script from "next/script"
const gaId = process.env.NEXT_PUBLIC_MEASUREMENT_ID!

const inter = Inter({ subsets: ["latin"] })

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

        <title>Colin &amp; Orne&#39;s Wedding</title>

        {/* SEO Meta Tags */}
        <meta
          content="Join Colin and Orne for their wedding on July 13, 2025, at Stonetree Estate in Novato, CA. Discover event details and celebrate their special day."
          name="description"
        />
        <meta
          content="Colin and Orne wedding, wedding at Stonetree Estate, July 13 2025 wedding, Novato CA wedding, wedding ceremony, wedding reception, California weddings, Stonetree Estate venue, Colin and Orne's special day, wedding event details, wedding guest information, wedding venue Stonetree Estate, Colin Franceschini and Ornella wedding, wedding in Novato California, wedding celebration, wedding planning, wedding guests, wedding schedule, love and marriage, wedding party, outdoor wedding, wedding date July 13, Stonetree Estate wedding venue, beautiful wedding in California, wedding RSVP, wedding location details, summer weddings in California, wedding invitations, Colin Franceschini, Ornella wedding details"
          name="keywords"
        />
        <meta name="author" content="Colin & Ornella" />
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link href="https://franceschini.wedding" rel="canonical" />

        {/* Open Graph Meta Tags */}
        <meta content="website" property="og:type" />
        <meta content="Colin & Orne's Wedding - July 13, 2025 at Stonetree Estate" property="og:title" />
        <meta content="Colin & Orne sharing champagne to celebrate their engagement" property="og:image:alt" />
        <meta
          content="Join Colin and Orne for their wedding on July 13, 2025, at Stonetree Estate in Novato, CA. Discover event details and celebrate their special day."
          property="og:description"
        />
        <meta content="https://franceschini.wedding" property="og:url" />
        <meta content="https://i.ibb.co/Tw4sNb7/ogimage.jpg" property="og:image" />

        {/* Twitter Card Meta Tags */}
        <meta content="summary_large_image" name="twitter:card" />
        <meta content="Colin & Orne's Wedding - July 13, 2025 at Stonetree Estate" name="twitter:title" />
        <meta content="Colin and Orne are getting married!" name="twitter:description" />
        <meta content="https://i.ibb.co/Tw4sNb7/ogimage.jpg" name="twitter:image" />
        <meta content="Colin & Orne sharing champagne to celebrate their engagement" property="twitter:image:alt" />

        {/* JSON-LD Structured Data */}
        <Script id="json-ld" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Colin & Ornella's Wedding",
            startDate: "2025-07-13T17:00",
            endDate: "2025-07-13T23:00",
            eventStatus: "EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Stonetree Estate",
              address: {
                "@type": "PostalAddress",
                streetAddress: "9 Stone Tree Ln",
                addressLocality: "Novato",
                addressRegion: "CA",
                postalCode: "94945",
                addressCountry: "US",
              },
            },
          })}
        </Script>
      </head>
      <body className={inter.className}>
        <div>
          <Header />
          <div>{children}</div>
        </div>
        <Analytics />
      </body>
      <GoogleAnalytics gaId={gaId} />
    </html>
  )
}

export default RootLayout
