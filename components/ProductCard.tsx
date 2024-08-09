"use client"
import { Gift } from "lucide-react"
import Imager from "./Image"
import { Button } from "./ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import React, { FC } from "react"
import { RegistryItem } from "@/types"
import { useModal } from "./Modals/context"

type Props = {
  item: RegistryItem
}

const ProductCard: FC<Props> = ({ item }) => {
  const { triggerModal, setSelectedProductData } = useModal()

  return (
    <Card>
      <CardHeader className="p-0">
        <Imager item={item} />
      </CardHeader>
      <CardContent className="pb-0 pt-4">
        <h3 className="ellipse two-lines min-h-[56px] text-center text-lg font-semibold">
          {item.name}
        </h3>
      </CardContent>
      <CardFooter className="flex flex-col pb-6">
        <Button
          className="mt-4 w-full rounded-md p-2"
          variant="outline"
          onClick={() => {
            setSelectedProductData(item)
            triggerModal("product")
          }}
        >
          <Gift className="mr-2 size-4" />
          {item.button_cta || "Contribute"}
        </Button>
        {
          <h4
            className={`text-sm ${item.contributions.hide_contributions ? "invisible" : "visible"}`}
          >
            Still needs: {!item.contributions.hide_contributions && item.contributions.still_needs}
          </h4>
        }
      </CardFooter>
    </Card>
  )
}

export default ProductCard
