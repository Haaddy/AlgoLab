import CategoryTab from './CategoryTab'
import type { AlgorithmCategory } from './data'

interface CategoryTabsProps {
  categories: AlgorithmCategory[]
  counts: Record<string, number>
  activeCategory: string
  onSelect: (id: string) => void
}

export default function CategoryTabs({ categories, counts, activeCategory, onSelect }: CategoryTabsProps) {
  return (
    <div className="category-tabs">
      <div className="category-tabs__list" role="group" aria-label="Категории алгоритмов">
        {categories.map((category) => (
          <CategoryTab
            key={category.id}
            category={category}
            count={counts[category.id] ?? 0}
            isActive={category.id === activeCategory}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}
