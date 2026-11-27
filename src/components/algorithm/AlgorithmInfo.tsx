import { Link } from 'react-router-dom'
import type { Algorithm } from '../../algorithms/registry'

interface AlgorithmInfoProps {
  algorithm: Algorithm
}

export default function AlgorithmInfo({ algorithm }: AlgorithmInfoProps) {
  return (
    <header className="algorithm-page__header">
      <Link className="algorithm-page__back" to="/dashboard">
        <span aria-hidden="true">←</span> Каталог алгоритмов
      </Link>
      <div className="algorithm-page__meta">
        <span className="algorithm-page__tag">{algorithm.tag}</span>
      </div>
      <h1 className="algorithm-page__title">{algorithm.title}</h1>
      <p className="algorithm-page__description">{algorithm.description}</p>
    </header>
  )
}
