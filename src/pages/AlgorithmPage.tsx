import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/reset.css'
import '../styles/variables.css'
import '../styles/fonts.css'
import '../styles/general.css'
import '../styles/components/button.css'
import '../styles/components/code-highlight.css'
import '../styles/components/sorting-visualizer.css'
import '../styles/AlgorithmPage.css'
import { getAlgorithm } from '../algorithms/registry'
import { AlgorithmCode, AlgorithmControls, AlgorithmInfo } from '../components/algorithm'
import SortingVisualizer from '../components/visualizers/SortingVisualizer'
import { useAlgorithmPlayback } from '../hooks/useAlgorithmPlayback'

const initialArray = [42, 17, 8, 63, 25, 9, 51, 33]

export default function AlgorithmPage() {
  const { algorithmId } = useParams()
  const algorithm = getAlgorithm(algorithmId)

  const steps = useMemo(
    () => algorithm?.generateSteps?.(initialArray) ?? [],
    [algorithm],
  )
  const playback = useAlgorithmPlayback(steps)

  if (!algorithm) {
    return (
      <div className="algorithm-page algorithm-page--missing">
        <div className="container">
          <h1 className="algorithm-page__title">Алгоритм не найден</h1>
          <p className="algorithm-page__description">
            Проверьте адрес страницы или вернитесь в каталог алгоритмов.
          </p>
          <Link className="button button--accent" to="/dashboard">
            В каталог
          </Link>
        </div>
      </div>
    )
  }

  const handlePlayPause = () => {
    if (playback.isPlaying) {
      playback.pause()
    } else {
      playback.play()
    }
  }

  return (
    <div className="algorithm-page">
      <div className="container">
        <AlgorithmInfo algorithm={algorithm} />

        <div className="algorithm-workspace">
          <section className="algorithm-workspace__visual" aria-label="Визуализация">
            <div className="algorithm-workspace__header">
              <h2 className="algorithm-workspace__heading">Визуализация</h2>
              <span className="algorithm-workspace__complexity">{algorithm.complexity}</span>
            </div>
            <SortingVisualizer step={playback.currentStep} />
          </section>
          <section className="algorithm-workspace__code" aria-label="Код алгоритма">
            <AlgorithmCode code={algorithm.code} />
          </section>
        </div>

        <div className="algorithm-page__controls">
          <div className="container">
            <AlgorithmControls
              isPlaying={playback.isPlaying}
              currentStepIndex={playback.currentStepIndex}
              totalSteps={steps.length}
              onPlayPause={handlePlayPause}
              onNext={playback.next}
              onPrev={playback.prev}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
