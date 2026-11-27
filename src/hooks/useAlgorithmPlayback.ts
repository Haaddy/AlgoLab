import { useCallback, useEffect, useState } from 'react'
import type { SortStep } from '../algorithms/sorting/types'

export interface Playback {
  currentStepIndex: number
  currentStep: SortStep | undefined
  isPlaying: boolean
  speed: number
  next: () => void
  prev: () => void
  play: () => void
  pause: () => void
  reset: () => void
  setSpeed: (speed: number) => void
}

export function useAlgorithmPlayback(steps: SortStep[], initialSpeed = 500): Playback {
  const [activeSteps, setActiveSteps] = useState(steps)
  const [state, setState] = useState({ index: 0, playing: false })
  const [speed, setSpeed] = useState(initialSpeed)

  if (activeSteps !== steps) {
    setActiveSteps(steps)
    setState({ index: 0, playing: false })
  }

  const next = useCallback(() => {
    setState((current) => {
      const index = Math.min(current.index + 1, Math.max(activeSteps.length - 1, 0))
      return { index, playing: index < activeSteps.length - 1 && current.playing }
    })
  }, [activeSteps.length])

  const prev = useCallback(() => {
    setState((current) => ({ ...current, index: Math.max(current.index - 1, 0) }))
  }, [])

  const play = useCallback(() => {
    if (activeSteps.length > 0) {
      setState((current) => ({ ...current, playing: true }))
    }
  }, [activeSteps.length])

  const pause = useCallback(() => {
    setState((current) => ({ ...current, playing: false }))
  }, [])

  const reset = useCallback(() => {
    setState({ index: 0, playing: false })
  }, [])

  useEffect(() => {
    if (!state.playing) return

    const timer = window.setInterval(next, speed)
    return () => window.clearInterval(timer)
  }, [state.playing, next, speed])

  return {
    currentStepIndex: state.index,
    currentStep: activeSteps[state.index],
    isPlaying: state.playing,
    speed,
    next,
    prev,
    play,
    pause,
    reset,
    setSpeed,
  }
}
