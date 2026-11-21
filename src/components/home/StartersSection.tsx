import StarterCard from './StarterCard'

const starters = [
  {
    title: 'Пузырьковая сортировка',
    tag: 'Сортировки',
    complexity: 'O(n²)',
    description: 'Начните с простого алгоритма и увидьте, как элементы меняются местами.',
  },
  {
    title: 'Бинарный поиск',
    tag: 'Поиск',
    complexity: 'O(log n)',
    description: 'Познакомьтесь с идеей деления задачи пополам на отсортированном массиве.',
  },
  {
    title: 'Поиск в ширину',
    tag: 'Графы',
    complexity: 'O(V + E)',
    description: 'Разберитесь, как находить кратчайший путь в невзвешенном графе.',
  },
]

export default function StartersSection() {
  return (
    <section className="section start-section" id="start">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-kicker">С чего начать</div>
            <h2>Три алгоритма<br />для первого шага.</h2>
          </div>
          <p className="section-intro">
            Не знаете, с чего начать? Эти темы помогут освоиться с визуальным подходом.
          </p>
        </div>
        <div className="starter-list">
          {starters.map((starter) => (
            <StarterCard key={starter.title} {...starter} />
          ))}
        </div>
      </div>
    </section>
  )
}
