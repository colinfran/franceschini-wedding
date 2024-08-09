"use client"

import React, { FC, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"

export const headerLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Registry",
    path: "/registry",
  },
  {
    title: "Wedding Party",
    path: "/wedding-party",
  },
  {
    title: "Gallery",
    path: "/gallery",
  },
  {
    title: "FAQs",
    path: "/faqs",
  },
]

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [width, setWidth] = useState<number>(0)

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
      <div className="page-title my-12 text-center text-xl uppercase leading-[1.43] tracking-[normal] xs:text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
        <Link href="/">Colin & Ornella</Link>
      </div>
      <nav
        className={`hidden items-center justify-center gap-4 md:flex ${isOpen ? "block" : "hidden"}`}
      >
        {headerLinks.map((item) => (
          <Link
            className={`${boldPath(item.path)} block px-2 py-1 text-black hover:underline md:py-0`}
            href={item.path}
            key={item.path}
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
