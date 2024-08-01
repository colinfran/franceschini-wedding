import React from "react"

export interface PhotoProps {
  key: string
  index: number
  onClick?: (
    event: React.MouseEvent<HTMLImageElement>,
    data: { photo: Photo; index: number },
  ) => void
  photo: Photo
  margin?: number
  direction?: "column" | "row"
  top?: number
  left?: number
}

interface Photo {
  key?: string
  src: string
  width: number
  height: number
  alt?: string
  title?: string
  srcSet?: string | string[]
  sizes?: string | string[]
}

const Photo: React.FC<PhotoProps> = ({ key, photo, margin, direction, top, left }) => {
  const imgStyle: React.CSSProperties = { margin, display: "block" }
  if (direction === "column") {
    imgStyle.position = "absolute"
    if (left !== undefined) imgStyle.left = left
    if (top !== undefined) imgStyle.top = top
  }

  /* Convert srcSet and sizes to strings if they are arrays */
  const srcSet = Array.isArray(photo.srcSet) ? photo.srcSet.join(", ") : photo.srcSet
  const sizes = Array.isArray(photo.sizes) ? photo.sizes.join(", ") : photo.sizes

  return (
    <img /* eslint-disable-line @next/next/no-img-element */
      alt={photo.alt || ""}
      height={photo.height}
      key={key}
      loading="lazy"
      sizes={sizes}
      src={photo.src}
      srcSet={srcSet}
      style={imgStyle}
      title={photo.src}
      width={photo.width}
    />
  )
}

export default Photo
