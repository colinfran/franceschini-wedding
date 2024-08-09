import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import React, { FC, useState } from "react"
import { useModal } from "./context"
import Imager from "../Image"
import { Progress } from "@/components/ui/progress"

const ProductModal: FC = () => {
  const { currentModal, triggerModal, selectedProductData, cartId } = useModal()
  const [amount, setAmount] = useState<string>("")
  console.log(selectedProductData)

  const submit = async (): Promise<void> => {
    const response = await fetch("/api/cart/add", {
      method: "POST",
      body: JSON.stringify({
        skuId: selectedProductData?.sku_object_id,
        collectionItemId: cartId,
        quantity: 1,
        contribution: amount,
        itemOrigin: "WEDDINGS",
      }),
    })
    await response.json()
  }

  return (
    <Dialog open={currentModal === "product"} onOpenChange={() => triggerModal("product")}>
      <DialogTitle className="sr-only">Product</DialogTitle>
      <DialogContent className="lg:w-[75vw] lg:max-w-[1200px]">
        <div className="py-8">
          <div className="flex flex-col lg:flex-row">
            <div className="m-auto w-full">
              <Imager item={selectedProductData!} />
            </div>
            <div className="w-full p-6">
              <h3 className="ellipse two-lines min-h-[56px] text-center text-lg font-semibold">
                {selectedProductData?.name}
              </h3>
              <hr className="border-t-2" />
              {!selectedProductData?.contributions.hide_contributions && (
                <div className="w-full pt-6">
                  <Progress value={selectedProductData?.contributions.percent_complete} />
                  <div className="text-center">{`${selectedProductData?.contributions.percent_complete}%`}</div>
                  <div className="text-center">{`Still needs: ${selectedProductData?.contributions.still_needs} `}</div>
                </div>
              )}
              <div className="flex flex-row gap-4 pt-6">
                <div className="relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 translate-x-full text-gray-500">
                    $
                  </div>
                  <Input
                    className="pl-[25px]"
                    type="number"
                    onChange={(e) => setAmount(`${e.target.value}`)}
                  />
                </div>
                <Button
                  className="w-full"
                  disabled={amount === "" || parseFloat(amount) <= 0}
                  onClick={submit}
                >
                  Contribute to gift
                </Button>
              </div>
              <div className="pt-6 text-center">
                <div>To order by phone, call 408-657-ZOLA (9652)</div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ProductModal
