import type { AlgorithmCategory } from './data'

interface CategoryTabProps {
  category: AlgorithmCategory
  count: number
  isActive: boolean
  onSelect: (id: string) => void
}

export default function CategoryTab({ category, count, isActive, onSelect }: CategoryTabProps) {
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
    <div className="category-tabs__item">
      <button
        className={tabClasses}
        type="button"
        aria-pressed={isActive}
        onClick={() => onSelect(category.id)}
      >
        <span className="category-tabs__glyph" aria-hidden="true">{category.glyph}</span>
        <span className="category-tabs__label">{category.label}</span>
        <span className="category-tabs__count">
          {String(count).padStart(2, '0')}
        </span>
      </button>
    </div>
  )
}
