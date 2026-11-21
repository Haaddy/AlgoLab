interface StarterCardProps {
  title: string
  tag: string
  complexity: string
  description: string
}

export default function StarterCard({
  title,
  tag,
  complexity,
  description,
}: StarterCardProps) {
  return (
    <article className="starter">
      <div className="starter-meta">
        <span>{tag}</span>
        <span>{complexity}</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <a className="starter-link" href="#top">
        Изучить алгоритм <span>→</span>
      </a>
    </article>
  )
}
