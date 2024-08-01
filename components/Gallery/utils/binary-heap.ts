type ScoreFunction<T> = (element: T) => number

export class BinaryHeap<T> {
  private content: T[] = []
  private scoreFunction: ScoreFunction<T>

  constructor(scoreFunction: ScoreFunction<T>) {
    this.scoreFunction = scoreFunction
  }

  push(element: T): void {
    this.content.push(element)
    this.bubbleUp(this.content.length - 1)
  }

  pop(): T | undefined {
    if (this.content.length === 0) return undefined

    const result = this.content[0]
    const end = this.content.pop()
    if (this.content.length > 0 && end !== undefined) {
      this.content[0] = end
      this.sinkDown(0)
    }
    return result
  }

  remove(node: T): void {
    const length = this.content.length

    for (let i = 0; i < length; i++) {
      if (this.content[i] !== node) continue

      const end = this.content.pop()
      if (i === length - 1) break
      if (end !== undefined) {
        this.content[i] = end
        this.bubbleUp(i)
        this.sinkDown(i)
      }
      break
    }
  }

  size(): number {
    return this.content.length
  }

  private bubbleUp(n: number): void {
    const element = this.content[n]
    const score = this.scoreFunction(element)

    while (n > 0) {
      const parentN = Math.floor((n + 1) / 2) - 1
      const parent = this.content[parentN]
      if (score >= this.scoreFunction(parent)) break

      this.content[parentN] = element
      this.content[n] = parent
      n = parentN
    }
  }

  private sinkDown(n: number): void {
    const length = this.content.length
    const element = this.content[n]
    const elemScore = this.scoreFunction(element)

    // eslint-disable-next-line no-constant-condition
    while (true) {
      const child2N = (n + 1) * 2
      const child1N = child2N - 1
      let swap: number | null = null

      if (child1N < length) {
        const child1 = this.content[child1N]
        const child1Score = this.scoreFunction(child1)
        if (child1Score < elemScore) swap = child1N
      }

      if (child2N < length) {
        const child2 = this.content[child2N]
        const child2Score = this.scoreFunction(child2)
        if (child2Score < (swap === null ? elemScore : this.scoreFunction(this.content[swap]))) {
          swap = child2N
        }
      }

      if (swap === null) break

      this.content[n] = this.content[swap]
      this.content[swap] = element
      n = swap
    }
  }
}

export default BinaryHeap
