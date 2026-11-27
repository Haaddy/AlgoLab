import { useState } from 'react'
import { PauseIcon, PlayIcon, StepBackIcon, StepForwardIcon } from '../icons'

export default function AlgorithmControls() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="algorithm-controls" role="group" aria-label="Управление алгоритмом">
      <div className="algorithm-controls__transport">
        <button
          className="algorithm-controls__button"
          type="button"
          aria-label="Назад"
          title="Назад"
        >
          <StepBackIcon aria-hidden="true" />
        </button>
        <button
          className="button button--accent algorithm-controls__button algorithm-controls__button--primary"
          type="button"
          aria-label={isPlaying ? 'Пауза' : 'Запустить'}
          title={isPlaying ? 'Пауза' : 'Запустить'}
          aria-pressed={isPlaying}
          onClick={() => setIsPlaying((playing) => !playing)}
        >
          {isPlaying ? <PauseIcon aria-hidden="true" /> : <PlayIcon aria-hidden="true" />}
        </button>
        <button
          className="algorithm-controls__button"
          type="button"
          aria-label="Вперёд"
          title="Вперёд"
        >
          <StepForwardIcon aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
