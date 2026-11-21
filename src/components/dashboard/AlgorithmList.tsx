import AlgorithmCard from './AlgorithmCard'
import type { Algorithm } from './data'

interface AlgorithmListProps {
  algorithms: Algorithm[]
}

export default function AlgorithmList({ algorithms }: AlgorithmListProps) {
  return (
    <div className="dashboard__grid">
      {algorithms.map((algorithm) => (
        <AlgorithmCard key={algorithm.id} algorithm={algorithm} />
      ))}
    </div>
  )
}
