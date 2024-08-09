"use client"

import React, { FC, useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { MobileNav } from "@/components/mobile-nav"
import Link from "next/link"
import { useModal } from "./Modals/context"
import { ShoppingCart } from "lucide-react"
import { Button } from "./ui/button"

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [width, setWidth] = useState<number>(0)
  const { triggerModal, setCartId } = useModal()

  useEffect(() => {
    const getCart = async (): Promise<void> => {
      const response = await fetch("/api/cart", {
        method: "POST",
      })
      const json = await response.json()
      console.log(json.data.cartId)
      setCartId(json.data.cartId)
    }
    const getNav = async (): Promise<void> => {
      await fetch("/api/cart/nav")
      // console.log(json)
    }
    getNav()
    getCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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

  return (
    <div className={"relative mb-8"}>
      <div className="page-title pt-20 text-center text-xl uppercase leading-[1.43] tracking-[normal] xs:text-2xl sm:text-2xl md:my-12 md:pt-0 md:text-4xl lg:text-5xl">
        <Link href="/">Colin & Ornella</Link>
      </div>
      <nav
        className={`hidden items-center justify-center gap-4 md:flex ${isOpen ? "block" : "hidden"}`}
      >
        <Link
          className={`${pathname === "/" ? "font-medium" : ""} block px-2 py-1 text-black hover:underline md:py-0`}
          href="/"
        >
          Home
        </Link>
        <Link
          className={`${pathname === "/registry" ? "font-medium" : ""} block px-2 py-1 text-black hover:underline md:py-0`}
          href="/registry"
        >
          Registry
        </Link>
        <Link
          className={`${pathname === "/wedding-party" ? "font-medium" : ""} block px-2 py-1 text-black hover:underline md:py-0`}
          href="/wedding-party"
        >
          Wedding Party
        </Link>
        <Link
          className={`${pathname === "/gallery" ? "font-medium" : ""} block px-2 py-1 text-black hover:underline md:py-0`}
          href="/gallery"
        >
          Gallery
        </Link>
        <Link
          className={`${pathname === "/faqs" ? "font-medium" : ""} block px-2 py-1 text-black hover:underline md:py-0`}
          href="/faqs"
        >
          FAQs
        </Link>
      </nav>
      <div className="absolute right-[.05rem] top-[-.75rem] hidden md:block">
        <Button className="mx-4" size="icon" variant="outline" onClick={() => triggerModal("cart")}>
          <div>
            <ShoppingCart />
          </div>
        </Button>
      </div>
      <div className="absolute right-[.05rem] top-6 flex md:hidden">
        <MobileNav />
      </div>
    </div>
  )
}
export default Header
