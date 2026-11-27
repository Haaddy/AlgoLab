const values = [42, 17, 8, 63, 25, 9, 51, 33]

export default function SortingVisualizer() {
  return (
    <div className="sorting-visualizer" aria-label="Визуализация сортировки">
      <div className="sorting-visualizer__list">
        {values.map((value, index) => {
          const stateClass =
            index === 2
              ? ' sorting-visualizer__item--comparing'
              : index === 5
                ? ' sorting-visualizer__item--sorted'
                : index === 0
                  ? ' sorting-visualizer__item--active'
                  : ''

          return (
            <div
              className={`sorting-visualizer__item${stateClass}`}
              key={index}
              style={{ height: `${value * 2 + 24}px` }}
            >
              <span className="sorting-visualizer__value">{value}</span>
            </div>
          )
        })}
      </div>
      <div className="sorting-visualizer__legend">
        <span className="sorting-visualizer__legend-item">сравнение</span>
        <span className="sorting-visualizer__legend-item sorting-visualizer__legend-item--sorted">готово</span>
      </div>
    </div>
  )
}
