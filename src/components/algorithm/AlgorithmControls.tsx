import { PauseIcon, PlayIcon, StepBackIcon, StepForwardIcon } from '../icons'

interface AlgorithmControlsProps {
  isPlaying: boolean
  currentStepIndex: number
  totalSteps: number
  onPlayPause: () => void
  onNext: () => void
  onPrev: () => void
}

export default function AlgorithmControls({
  isPlaying,
  currentStepIndex,
  totalSteps,
  onPlayPause,
  onNext,
  onPrev,
}: AlgorithmControlsProps) {
  return (
    <div className="algorithm-controls" role="group" aria-label="Управление алгоритмом">
      <div className="algorithm-controls__transport">
        <button
          className="algorithm-controls__button"
          type="button"
          aria-label="Назад"
          title="Назад"
          onClick={onPrev}
        >
          <StepBackIcon aria-hidden="true" />
        </button>
        <button
          className="button button--accent algorithm-controls__button algorithm-controls__button--primary"
          type="button"
          aria-label={isPlaying ? 'Пауза' : 'Запустить'}
          title={isPlaying ? 'Пауза' : 'Запустить'}
          aria-pressed={isPlaying}
          onClick={onPlayPause}
        >
          {isPlaying ? <PauseIcon aria-hidden="true" /> : <PlayIcon aria-hidden="true" />}
        </button>
        <button
          className="algorithm-controls__button"
          type="button"
          aria-label="Вперёд"
          title="Вперёд"
          onClick={onNext}
        >
          <StepForwardIcon aria-hidden="true" />
        </button>
        <span className="algorithm-controls__counter">
          {String(currentStepIndex + 1).padStart(2, '0')} / {String(totalSteps).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
