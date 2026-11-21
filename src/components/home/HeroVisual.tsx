export default function HeroVisual() {
  return (
    <div className="visual-card" aria-label="Декоративная визуализация сортировки">
      <div className="window-bar">
        <span className="dots"><i /><i /><i /></span>
        <span>sorting / bubble-sort</span>
        <span>01 / 04</span>
      </div>
      <div className="bars">
        <span className="bar active" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar active" />
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
      </div>
      <div className="visual-label">
        <span>сравнение элементов</span>
        <span>шаг 04</span>
      </div>
    </div>
  )
}
