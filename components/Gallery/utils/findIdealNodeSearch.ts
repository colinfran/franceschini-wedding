import { round } from "./round"

// Define the type for function parameters
interface FindIdealNodeSearchParams {
  targetRowHeight: number
  containerWidth: number
}

// Estimate how many neighboring nodes should be searched based on
// the aspect ratio of the container with images having an avg AR of 1.5
// as the minimum amount of photos per row, plus some nodes
export const findIdealNodeSearch = ({
  targetRowHeight,
  containerWidth,
}: FindIdealNodeSearchParams): number => {
  const rowAR = containerWidth / targetRowHeight
  return round(rowAR / 1.5) + 8
}
