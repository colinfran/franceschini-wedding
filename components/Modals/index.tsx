"use client"

import React, { FC } from "react"
import CartModal from "./CartModal"
import ProductModal from "./ProductModal"

const Modals: FC = () => {
  return (
    <>
      <CartModal />
      <ProductModal />
    </>
  )
}

export default Modals
