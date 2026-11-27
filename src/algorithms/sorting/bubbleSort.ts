import type { SortStep } from './types'

export function bubbleSort(input: number[]): SortStep[] {
  const work = [...input]
  const sorted: number[] = []
  const steps: SortStep[] = []

  const record = (
    comparing: number[] = [],
    swapped: [number, number] | null = null,
    active: number | null = null,
  ) => {
    steps.push({
      array: [...work],
      comparing: [...comparing],
      swapped,
      sorted: [...sorted],
      active,
    })
  }

  record()

  for (let i = 0; i < work.length - 1; i++) {
    for (let j = 0; j < work.length - 1 - i; j++) {
      record([j, j + 1], null, j)

      if (work[j] > work[j + 1]) {
        const temp = work[j]
        work[j] = work[j + 1]
        work[j + 1] = temp
        record([j, j + 1], [j, j + 1], j)
      }
    }

    sorted.push(work.length - 1 - i)
    record()
  }

  if (sorted.length < work.length) {
    sorted.push(0)
  }
  record()

  return steps
}
