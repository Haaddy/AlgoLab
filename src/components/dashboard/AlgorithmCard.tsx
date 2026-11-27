import type { Algorithm } from './data'
import {Link} from 'react-router-dom'

interface AlgorithmCardProps {
  algorithm: Algorithm
}

export default function AlgorithmCard({ algorithm }: AlgorithmCardProps) {
  return (
    <article className="card card--algorithm">
      {/* <span className="card__icon" aria-hidden="true">{algorithm.glyph}</span> */}
      <div className="card__meta">
        <span>{algorithm.tag}</span>
        <span className="card__complexity">{algorithm.complexity}</span>
      </div>
      <h3 className="card__title">{algorithm.title}</h3>
      <p className="card__description">{algorithm.description}</p>
      <div className="card__footer">
        <Link  className="card__link"to={`/algorithms/${algorithm.id}`}>
          Открыть алгоритм <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </article>
  )
}
