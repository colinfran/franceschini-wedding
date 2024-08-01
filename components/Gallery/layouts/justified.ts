import { ratio } from "../utils/ratio"
import { round } from "../utils/round"
import { findShortestPath } from "../utils/dijkstra"

interface Photo {
  width: number
  height: number
  // Include other properties of Photo if needed
}

interface ComputeRowLayoutParams {
  containerWidth: number
  limitNodeSearch: number
  targetRowHeight: number
  margin: number
  photos: Photo[]
}

// Compute sizes by creating a graph with rows as edges and photo to break on as nodes
// to calculate the single best layout using Dijkstra's findShortestPath

// Get the height for a set of photos in a potential row
const getCommonHeight = (row: Photo[], containerWidth: number, margin: number): number => {
  const rowWidth = containerWidth - row.length * (margin * 2)
  const totalAspectRatio = row.reduce((acc, photo) => acc + ratio(photo), 0)
  return rowWidth / totalAspectRatio
}

// Calculate the cost of breaking at this node (edge weight)
const cost = (
  photos: Photo[],
  i: number,
  j: number,
  width: number,
  targetHeight: number,
  margin: number,
): number => {
  const row = photos.slice(i, j)
  const commonHeight = getCommonHeight(row, width, margin)
  return Math.pow(Math.abs(commonHeight - targetHeight), 2)
}

// Return function that gets the neighboring nodes of a node and returns costs
const makeGetNeighbors =
  (
    targetHeight: number,
    containerWidth: number,
    photos: Photo[],
    limitNodeSearch: number,
    margin: number,
  ) =>
  (start: string): Record<string, number> => {
    const results: Record<string, number> = {}
    const startIndex = parseInt(start, 10)
    results[start] = 0
    for (let i = startIndex + 1; i < photos.length + 1; ++i) {
      if (i - startIndex > limitNodeSearch) break
      results[i.toString()] = cost(photos, startIndex, i, containerWidth, targetHeight, margin)
    }
    return results
  }

export const computeRowLayout = ({
  containerWidth,
  limitNodeSearch,
  targetRowHeight,
  margin,
  photos,
}: ComputeRowLayoutParams): Photo[] => {
  const getNeighbors = makeGetNeighbors(
    targetRowHeight,
    containerWidth,
    photos,
    limitNodeSearch,
    margin,
  )
  let path: any = findShortestPath(getNeighbors, "0", photos.length.toString()) // eslint-disable-line @typescript-eslint/no-explicit-any
  path = path.map((node: string) => parseInt(node, 10))
  for (let i = 1; i < path.length; ++i) {
    const row = photos.slice(path[i - 1], path[i])
    const height = getCommonHeight(row, containerWidth, margin)
    for (let j = path[i - 1]; j < path[i]; ++j) {
      photos[j].width = round(height * ratio(photos[j]), 1)
      photos[j].height = height
    }
  }
  return photos
}
