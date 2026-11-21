interface FeatureCardProps {
  number: string
  title: string
  description: string
}

export default function FeatureCard({ number, title, description }: FeatureCardProps) {
  return (
    <article className="feature">
      <span className="feature-number">{number}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  )
}
