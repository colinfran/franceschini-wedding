import { BinaryHeap } from "./binary-heap"

interface Graph {
  (nodeId: string): { [neighbor: string]: number } | undefined
}

interface PrecedentsMap {
  [nodeId: string]: string
}

const buildPrecedentsMap = (graph: Graph, startNode: string, endNode: string): PrecedentsMap => {
  const precedentsMap: PrecedentsMap = {}
  const visited: { [nodeId: string]: boolean } = {}
  const storedShortestPaths: { [nodeId: string]: number } = { [startNode]: 0 }
  const pQueue = new BinaryHeap<{ id: string; weight: number }>((node) => node.weight)
  pQueue.push({ id: startNode, weight: 0 })

  while (pQueue.size()) {
    const shortestNode = pQueue.pop()
    const shortestNodeId = shortestNode!.id

    if (visited[shortestNodeId]) continue

    const neighboringNodes = graph(shortestNodeId) || {}
    visited[shortestNodeId] = true

    for (const neighbor in neighboringNodes) {
      const newTotalWeight = shortestNode!.weight + neighboringNodes[neighbor]

      if (
        typeof storedShortestPaths[neighbor] === "undefined" ||
        storedShortestPaths[neighbor] > newTotalWeight
      ) {
        storedShortestPaths[neighbor] = newTotalWeight
        pQueue.push({ id: neighbor, weight: newTotalWeight })
        precedentsMap[neighbor] = shortestNodeId
      }
    }
  }

  if (typeof storedShortestPaths[endNode] === "undefined") {
    throw new Error(`There is no path from ${startNode} to ${endNode}`)
  }

  return precedentsMap
}

const getPathFromPrecedentsMap = (precedentsMap: PrecedentsMap, endNode: string): string[] => {
  const nodes: string[] = []
  let n = endNode

  while (n) {
    nodes.push(n)
    n = precedentsMap[n]
  }

  return nodes.reverse()
}

export const findShortestPath = (graph: Graph, startNode: string, endNode: string): string[] => {
  const precedentsMap = buildPrecedentsMap(graph, startNode, endNode)
  return getPathFromPrecedentsMap(precedentsMap, endNode)
}
