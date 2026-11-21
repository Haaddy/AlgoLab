interface CategoryItemProps {
  title: string
  count: string
  description: string
  accent: string
  glyph: string
}

export default function CategoryItem({
  title,
  count,
  description,
  accent,
  glyph,
}: CategoryItemProps) {
  return (
    <a className={`category ${accent}`} href="#start">
      <span className="category-icon">{glyph}</span>
      <h3>{title}</h3>
      <p>{description}</p>
      <span className="category-count">{count}</span>
    </a>
  )
}
