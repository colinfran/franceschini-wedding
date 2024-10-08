import { round } from "../utils/round"

interface Photo {
  width: number
  height: number
  top?: number
  left?: number
  containerHeight?: number
}

interface ComputeColumnLayoutProps {
  photos: Photo[]
  columns: number
  containerWidth: number
  margin: number
}

export const computeColumnLayout = ({
  photos,
  columns,
  containerWidth,
  margin,
}: ComputeColumnLayoutProps): Photo[] => {
  // calculate each colWidth based on total width and column amount
  const colWidth = (containerWidth - margin * 2 * columns) / columns

  // map through each photo to assign adjusted height and width based on colWidth
  const photosWithSizes = photos.map((photo) => {
    const newHeight = (photo.height / photo.width) * colWidth
    return {
      ...photo,
      width: round(colWidth, 1),
      height: round(newHeight, 1),
    }
  })

  // store all possible left positions
  // and current top positions for each column
  const colLeftPositions: number[] = []
  const colCurrTopPositions: number[] = []
  for (let i = 0; i < columns; i++) {
    colLeftPositions[i] = round(i * (colWidth + margin * 2), 1)
    colCurrTopPositions[i] = 0
  }

  // map through each photo, then reduce through each "column"
  // find column with the smallest height and assign to photo's 'top'
  // update that column's height with this photo's height
  const photosPositioned = photosWithSizes.map((photo) => {
    const smallestCol = colCurrTopPositions.reduce((acc, item, i) => {
      return item < colCurrTopPositions[acc] ? i : acc
    }, 0)

    photo.top = colCurrTopPositions[smallestCol]
    photo.left = colLeftPositions[smallestCol]
    colCurrTopPositions[smallestCol] = colCurrTopPositions[smallestCol] + photo.height + margin * 2

    // store the tallest col to use for gallery height because of abs positioned elements
    const tallestCol = colCurrTopPositions.reduce((acc, item, i) => {
      return item > colCurrTopPositions[acc] ? i : acc
    }, 0)
    photo.containerHeight = colCurrTopPositions[tallestCol]
    return photo
  })
  return photosPositioned
}
