import { useState } from 'react'
import './styles/reset.css'
import './styles/variables.css'
import './styles/fonts.css'
import './styles/general.css'
import './styles/components/button.css'
import './styles/components/card.css'
import './styles/components/category-tabs.css'
import './styles/DashboardPage.css'
import { AlgorithmList, CategoryTabs, algorithms, categories, initialCategory } from './components/dashboard'

const counts: Record<string, number> = Object.fromEntries(
  categories.map((category) => [
    category.id,
    algorithms.filter((algorithm) => algorithm.category === category.id).length,
  ]),
)

export default function DashboardPage() {
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const activeAlgorithms = algorithms.filter((algorithm) => algorithm.category === activeCategory)

  return (
    <div className="dashboard">
      <header className="dashboard__header container">
        <h1 className="dashboard__title">Каталог алгоритмов</h1>
        <p className="dashboard__intro">
          Выберите тему и разберите алгоритм по шагам: визуализация, код и сложность — в одном месте.
        </p>
      </header>

      <div className="dashboard__controls container">
        <CategoryTabs
          categories={categories}
          counts={counts}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />
      </div>

      <section className="dashboard__results container" aria-label="Алгоритмы выбранной категории">
        <div className="dashboard__count">
          <span className="dashboard__count-value">{String(activeAlgorithms.length).padStart(2, '0')}</span>
          <span>алгоритмов в разделе</span>
        </div>
        <AlgorithmList algorithms={activeAlgorithms} />
      </section>
    </div>
  )
}
