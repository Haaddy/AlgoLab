import CategoryItem from './CategoryItem'

const categories = [
  { title: 'Сортировки', count: '08 алгоритмов', description: 'От пузырьковой до быстрой сортировки', accent: 'orange', glyph: '↕' },
  { title: 'Поиск', count: '05 алгоритмов', description: 'Находите элементы быстрее и точнее', accent: 'blue', glyph: '⌕' },
  { title: 'Графы', count: '06 алгоритмов', description: 'Связи, вершины и обходы без загадок', accent: 'purple', glyph: '◌' },
  { title: 'Поиск пути', count: '04 алгоритма', description: 'Строим оптимальный маршрут шаг за шагом', accent: 'green', glyph: '⌁' },
  { title: 'Структуры данных', count: '07 структур', description: 'Массивы, деревья, очереди и не только', accent: 'yellow', glyph: '▦' },
  { title: 'Динамика', count: '03 алгоритма', description: 'Разбиваем сложные задачи на простые', accent: 'pink', glyph: '▰' },
]

export default function CatalogSection() {
  return (
    <section className="section catalog-section" id="catalog">
      <div className="container">
        <div className="section-header">
          <div>
            <div className="section-kicker">Каталог</div>
            <h2>Выберите свою<br />точку старта.</h2>
          </div>
          <p className="section-intro">
            Собрали главные темы алгоритмов в понятные интерактивные модули.
          </p>
        </div>
        <div className="catalog-grid">
          {categories.map((category) => (
            <CategoryItem key={category.title} {...category} />
          ))}
        </div>
      </div>
    </section>
  )
}
