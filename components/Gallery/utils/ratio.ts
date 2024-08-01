import { round } from "./round"

// Define a type for the input parameter
interface Dimensions {
  width: number
  height: number
}

// Return a number rounded to two decimal places
export const ratio = ({ width, height }: Dimensions): number => {
  if (height === 0) {
    throw new Error("Height cannot be zero") // Avoid division by zero
  }
  return round(width / height, 2)
}
