import type { SortStep } from '../../algorithms/sorting/types'

interface SortingVisualizerProps {
  step: SortStep | undefined
}

export default function SortingVisualizer({ step }: SortingVisualizerProps) {
  if (!step) {
    return null
  }

  return (
    <div className="sorting-visualizer" aria-label="Визуализация сортировки">
      <div className="sorting-visualizer__list">
        {step.array.map((value, index) => {
          const classes = ['sorting-visualizer__item']

          if (step.sorted.includes(index)) {
            classes.push('sorting-visualizer__item--sorted')
          }
          if (step.active === index) {
            classes.push('sorting-visualizer__item--active')
          }
          if (step.swapped?.includes(index)) {
            classes.push('sorting-visualizer__item--swapped')
          }
          if (step.comparing.includes(index)) {
            classes.push('sorting-visualizer__item--comparing')
          }

          return (
            <div
              className={classes.join(' ')}
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
