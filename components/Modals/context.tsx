"use client"
import { RegistryItem } from "@/types"
import React, { createContext, useState, useContext, ReactNode, FC } from "react"

interface ModalContextProps {
  currentModal: string | null
  triggerModal: (modalName: string | null) => void
  selectedProductData: RegistryItem | null
  setSelectedProductData: (data: RegistryItem | null) => void
  cartId: string | null
  setCartId: (data: string | null) => void
}

const ModalContext = createContext<ModalContextProps | undefined>(undefined)

export const useModal = (): ModalContextProps => {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider")
  }
  return context
}

export const ModalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [currentModal, setCurrentModal] = useState<string | null>(null)
  const [selectedProductData, setSelectedProductData] = useState<RegistryItem | null>(null)
  const [cartId, setCartId] = useState(null)
  const triggerModal = (modalName: string | null): void => {
    setCurrentModal(modalName === currentModal ? null : modalName)
  }

  return (
    <ModalContext.Provider
      value={{
        currentModal,
        triggerModal,
        selectedProductData,
        setSelectedProductData,
        cartId,
        setCartId,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}
