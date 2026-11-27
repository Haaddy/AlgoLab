export interface SortStep {
  array: number[]
  comparing: number[]
  swapped: [number, number] | null
  sorted: number[]
  active?: number | null
}
