/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { useState, useLayoutEffect, useRef, CSSProperties, ReactNode } from "react"
import ResizeObserver from "resize-observer-polyfill"
import Photo, { PhotoProps as PhotoProp } from "./Photo"
import { computeColumnLayout } from "./layouts/columns"
import { computeRowLayout } from "./layouts/justified"
import { findIdealNodeSearch } from "./utils/findIdealNodeSearch"

type PhotoType = {
  src: string
  width: number
  height: number
  [key: string]: any
}

export type PhotoProps = {
  left: number
  top: number
  containerHeight: number
  key: string | number
  index: number
  margin: number
  direction: string
  onClick?: (event: React.MouseEvent, data: any) => void
  photo: PhotoType
} & PhotoProp

interface GalleryProps {
  photos: PhotoType[]
  onClick?: (
    event: React.MouseEvent,
    data: { index: number; photo: PhotoType; previous: PhotoType | null; next: PhotoType | null },
  ) => void
  direction?: "row" | "column"
  margin?: number
  limitNodeSearch?: ((containerWidth: number) => number) | number
  targetRowHeight?: ((containerWidth: number) => number) | number
  columns?: ((containerWidth: number) => number) | number
  renderImage?: (props: PhotoProps) => ReactNode
}

const Gallery: React.FC<GalleryProps> = React.memo(
  ({
    photos,
    direction = "row",
    margin = 2,
    limitNodeSearch,
    targetRowHeight = 300,
    columns,
    renderImage,
  }) => {
    const [containerWidth, setContainerWidth] = useState(0)
    const galleryEl = useRef<HTMLDivElement | null>(null)

    useLayoutEffect(() => {
      let animationFrameID: number | null = null
      const observer = new ResizeObserver((entries) => {
        const newWidth = entries[0].contentRect.width
        if (containerWidth !== newWidth) {
          animationFrameID = window.requestAnimationFrame(() => {
            setContainerWidth(Math.floor(newWidth))
          })
        }
      })
      if (galleryEl.current) {
        observer.observe(galleryEl.current)
      }
      return () => {
        observer.disconnect()
        if (animationFrameID !== null) {
          window.cancelAnimationFrame(animationFrameID)
        }
      }
    }, [containerWidth])

    if (!containerWidth) return <div ref={galleryEl}>&nbsp;</div>

    const width = containerWidth - 1
    let galleryStyle: CSSProperties
    let thumbs: any[] // Define more specific type if possible

    if (direction === "row") {
      if (typeof limitNodeSearch === "function") {
        limitNodeSearch = limitNodeSearch(containerWidth)
      }
      if (typeof targetRowHeight === "function") {
        targetRowHeight = targetRowHeight(containerWidth)
      }
      if (limitNodeSearch === undefined) {
        limitNodeSearch = 2
        if (containerWidth >= 450) {
          limitNodeSearch = findIdealNodeSearch({ containerWidth, targetRowHeight })
        }
      }

      galleryStyle = { display: "flex", flexWrap: "wrap", flexDirection: "row" }
      thumbs = computeRowLayout({
        containerWidth: width,
        limitNodeSearch,
        targetRowHeight,
        margin,
        photos,
      })
    } else {
      if (typeof columns === "function") {
        columns = columns(containerWidth)
      }
      if (columns === undefined) {
        columns = 1
        if (containerWidth >= 500) columns = 2
        if (containerWidth >= 900) columns = 3
        if (containerWidth >= 1500) columns = 4
      }
      galleryStyle = { position: "relative" }
      thumbs = computeColumnLayout({ containerWidth: width, columns, margin, photos })
      galleryStyle.height = thumbs[thumbs.length - 1].containerHeight
    }

    const renderComponent = renderImage || Photo
    return (
      <div>
        <div ref={galleryEl} style={galleryStyle}>
          {thumbs.map((thumb, index) => {
            const { left, top, containerHeight, ...photo } = thumb
            return renderComponent({
              left,
              top,
              key: thumb.key || thumb.src,
              containerHeight,
              index,
              margin,
              direction,
              photo,
            } as PhotoProps)
          })}
        </div>
      </div>
    )
  },
)

Gallery.displayName = "Gallery"

export default Gallery
