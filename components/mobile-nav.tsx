import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React, { FC, SVGProps, useState } from "react"

const MenuIcon: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      {...props}
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

export const MobileNav: FC = () => {
  const [open, setOpen] = useState(false)

  const handleLinkClick = (): void => {
    setOpen(false)
  }
  return (
    <header className="flex h-16 w-full items-center justify-between bg-background px-4 md:px-6">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="size-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-xs bg-background p-6" side="right">
          <div className="page-title my-12 text-center text-xl uppercase leading-[1.43] tracking-[normal] xs:text-2xl sm:text-2xl md:text-4xl lg:text-5xl">
            <Link href="/">Colin & Ornella</Link>
          </div>
          <nav className="grid gap-4">
            <Link
              className="flex items-center gap-2 text-lg font-medium text-foreground hover:underline"
              href="/"
              prefetch={false}
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium text-foreground hover:underline"
              href="/registry"
              prefetch={false}
              onClick={handleLinkClick}
            >
              Registry
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium text-foreground hover:underline"
              href="/wedding-party"
              prefetch={false}
              onClick={handleLinkClick}
            >
              Wedding Party
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium text-foreground hover:underline"
              href="/gallery"
              prefetch={false}
              onClick={handleLinkClick}
            >
              Gallery
            </Link>
            <Link
              className="flex items-center gap-2 text-lg font-medium text-foreground hover:underline"
              href="/faqs"
              prefetch={false}
              onClick={handleLinkClick}
            >
              FAQs
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </header>
  )
}
