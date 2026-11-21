import FeatureCard from './FeatureCard'

const features = [
  {
    number: '01',
    title: 'Визуализация по шагам',
    description: 'Наблюдайте за каждым сравнением, обменом и переходом в реальном времени.',
    icon: '▥',
  },
  {
    number: '02',
    title: 'Разбор сложности',
    description: 'Понимайте, как растут время и память алгоритма на разных входных данных.',
    icon: '∿',
  },
  {
    number: '03',
    title: 'Код с подсветкой',
    description: 'Читайте реализацию и связывайте строки кода с происходящим на сцене.',
    icon: '</>',
  },
  {
    number: '04',
    title: 'Сравнение алгоритмов',
    description: 'Сопоставляйте подходы и выбирайте подходящий инструмент для задачи.',
    icon: '⇄',
  },
]

export default function FeaturesSection() {
  return (
    <section className="section features-section" id="features">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-kicker">Возможности</div>
            <h2>Учитесь не запоминать,<br />а понимать.</h2>
          </div>
          <p className="section-intro">
            Каждый инструмент AlgoLab помогает увидеть логику алгоритма и почувствовать, как он работает.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature) => (
            <FeatureCard key={feature.number} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
