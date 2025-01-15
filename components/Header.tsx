"use client"

import React, { FC, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"
import { useTranslations } from "next-intl"

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [width, setWidth] = useState<number>(0)
  const t = useTranslations()

  const headerLinks = [
    {
      title: t("Home"),
      path: "/",
    },
    {
      title: "RSVP",
      path: "/rsvp",
    },
    {
      title: t("Registry"),
      path: "/registry",
    },
    {
      title: t("Wedding Party"),
      path: "/wedding-party",
    },
    {
      title: t("Gallery"),
      path: "/gallery",
    },
    {
      title: t("FAQs"),
      path: "/faqs",
    },
  ]

  const handleWindowSizeChange = (): void => {
    setWidth(window.innerWidth)
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange)
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange)
    }
  }, [])

  const isMobile = width <= 768

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false)
    }
  }, [isMobile])

  const boldPath = (val: string): string => {
    return pathname === val ? "font-medium" : ""
  }

  return (
    <div className={" relative mb-8"}>
      <h1 className="page-title my-12 text-center text-xl uppercase leading-[1.43] tracking-[normal] xs:text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
        <Link href="/">{t("Colin & Ornella")}</Link>
      </h1>
      <nav
        className={`hidden items-center justify-center gap-4 md:flex ${isOpen ? "block" : "hidden"}`}
      >
        {headerLinks.map((item) => (
          <Link
            className={`${boldPath(item.path)} block px-2 py-1 text-black hover:underline md:py-0`}
            href={item.path}
            key={item.path}
            onClick={() => {
              if (pathname === item.path) {
                window.location.reload()
              }
            }}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <div className="absolute right-[.05rem] top-[-.75rem] flex md:hidden">
        <MobileNav />
      </div>
    </div>
  )
}
export default Header
