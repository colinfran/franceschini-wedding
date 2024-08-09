import React, { FC } from "react"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getRegistryData } from "@/lib/server-utils"
import { RegistryItem } from "@/types"
import ProductCard from "@/components/ProductCard"

const Page: FC = async () => {
  const registryData: RegistryItem[] = await getRegistryData()

  return (
    <div className="mx-auto flex max-w-[1450px] flex-col justify-center p-4">
      <Button className="mb-8 w-full rounded-md bg-black text-white" asChild>
        <div className="m-auto max-w-[736px]">
          <Link
            className="flex h-10 w-full flex-row items-center justify-center uppercase"
            href="https://www.zola.com/registry/colinandornella"
            target="_blank"
          >
            <ExternalLink className="mr-2 size-4" /> See our full Zola registry
          </Link>
        </div>
      </Button>
      <div className="my-4 flex w-full justify-center">
        <Image
          alt="Wedding Registry Brands - Zola"
          className="brightness-0 invert-0"
          height={200}
          src="https://d1tntvpcrzvon2.cloudfront.net/static-assets/images/logos/zola-logomark-marine.png"
          width={200}
          priority
        />
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {registryData?.map((item: RegistryItem) => <ProductCard item={item} key={item.item_id} />)}
      </div>
    </div>
  )
}

export default Page
