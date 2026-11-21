interface FeatureCardProps {
  number: string
  title: string
  description: string
  icon: string
}

export default function FeatureCard({ number, title, description, icon }: FeatureCardProps) {
  return (
    <article className="feature">
      <span className="feature-number">{number}</span>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
