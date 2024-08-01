/**
 * Rounds a number to a specified number of decimal places.
 *
 * @param value - The number to be rounded.
 * @param decimals - The number of decimal places to round to (default is 0).
 * @returns The rounded number.
 */
export const round = (value: number, decimals: number = 0): number => {
  if (decimals < 0) {
    throw new Error("Decimal places cannot be negative")
  }
  // Calculate the factor of 10 to shift the decimal point
  const factor = Math.pow(10, decimals)
  // Round the value after shifting the decimal point
  return Math.round(value * factor) / factor
}
