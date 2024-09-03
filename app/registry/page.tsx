import React, { FC } from "react"
import { Gift, ExternalLink } from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Imager from "@/components/Image"
import { getRegistryData } from "@/lib/server-utils"
import { RegistryItem } from "@/types"

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
          height={30.5}
          src="https://d1tntvpcrzvon2.cloudfront.net/static-assets/images/logos/zola-logomark-marine.png"
          width={200}
        />
      </div>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {registryData?.map((item: RegistryItem) => (
          <Card key={item.item_id} className={`relative ${item.contributions.fulfilled ? "pointer-events-none":""}`}> 
            <CardHeader className="p-0">
              <Imager item={item} />
            </CardHeader>
            <CardContent className="pb-0 pt-4">
              <h3 className="ellipse two-lines min-h-[56px] text-center text-lg font-semibold">
                {item.name}
              </h3>
            </CardContent>
            <CardFooter className="flex flex-col pb-6">
              <Button className="mt-4 w-full rounded-md p-2" variant="outline" asChild>
                <Link
                  href={`https://www.zola.com/registry/collection-item/${item.item_id}`}
                  target="_blank"
                >
                  <Gift className="mr-2 size-4" />
                  {item.button_cta || "Contribute"}
                </Link>
              </Button>
              {!item.contributions.hide_contributions && item.contributions.still_needs === "1" ? (
                <h4
                  className={`text-sm ${item.contributions.hide_contributions ? "invisible" : "visible"}`}
                >
                  Price:{" $"}
                  {item.price}
                </h4>
              ) : (
                <h4
                  className={`text-sm ${item.contributions.hide_contributions ? "invisible" : "visible"}`}
                >
                  Still needs:{" "}
                  {!item.contributions.hide_contributions && item.contributions.still_needs}
                </h4>
              )}
            </CardFooter>
            {
              item.contributions.fulfilled && (
                <div className="absolute inset-0 bg-[rgba(82,82,82,0.75)]">
                  <span className="text-white flex justify-center items-center w-full h-full text-center">Item has already been purchased.</span>
                </div>
              )
            }
          </Card>
        ))}
      </div>
    </div>
  )
}

export default Page
