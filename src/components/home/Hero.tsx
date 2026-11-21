import { ArrowIcon } from '../icons'
import { Link } from "react-router";
import HeroVisual from './HeroVisual'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div>
          <span className="eyebrow">Интерактивная лаборатория</span>
          <h1>Алгоритмы,<br /><em>которые можно увидеть</em></h1>
          <p className="hero-copy">
            <strong>Здесь сортировки, структуры данных и графы разбираются на шаги:</strong>{' '}
            визуализация, объяснение, код и сложность — в одном месте.
          </p>
          <div className="hero-actions">
            {/* <a className="primary-button" href="#catalog">
              Начать изучение <ArrowIcon />
            </a> */}
            <Link className="primary-button" to="/dashboard">Начать изучение <ArrowIcon /> </Link>
            <a className="text-link" href="#how-it-works">
              Как это работает <span>↓</span>
            </a>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  )
}
