import type { AlgorithmCategory } from './data'

interface CategoryTabsProps {
  categories: AlgorithmCategory[]
  counts: Record<string, number>
  activeCategory: string
}

export default function CategoryTabs({ categories, counts, activeCategory }: CategoryTabsProps) {
  return (
    <div className="category-tabs">
      <div className="category-tabs__list" role="group" aria-label="Категории алгоритмов">
        {categories.map((category) => {
          const isActive = category.id === activeCategory
          const tabClasses = [
            'button',
            'button--soft',
            'category-tabs__tab',
            isActive && 'button--active',
            isActive && 'category-tabs__tab--active',
          ]
            .filter(Boolean)
            .join(' ')

          return (
            <div className="category-tabs__item" key={category.id}>
              <button className={tabClasses} type="button" aria-pressed={isActive}>
                <span className="category-tabs__glyph" aria-hidden="true">{category.glyph}</span>
                <span className="category-tabs__label">{category.label}</span>
                <span className="category-tabs__count">
                  {String(counts[category.id] ?? 0).padStart(2, '0')}
                </span>
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}
