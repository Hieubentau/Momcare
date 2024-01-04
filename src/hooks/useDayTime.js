import { useEffect, useState } from 'react'

const bound = [
  { from: 0, to: 6, type: 0, label: 'buổi đêm \u{1F30C}' },
  { from: 6, to: 11, type: 1, label: 'buổi sáng \u{1F305}' },
  { from: 11, to: 13, type: 2, label: 'buổi trưa \u{FE0F}' },
  { from: 13, to: 18, type: 3, label: 'buổi chiều \u{1F324}' },
  { from: 18, to: 24, type: 4, label: 'buổi tối \u{1F319}' }
]

export const useDayTime = () => {
  const [state, setState] = useState({ type: 0, label: 'buổi đêm' })
  useEffect(() => {
    const updateDayOrNight = () => {
      const hour = new Date().getHours()
      const current = bound.find((b) => hour >= b.from && hour < b.to)
      setState({ type: current.type, label: current.label })
    }
    updateDayOrNight()
    // update day or night every hour
    const interval = setInterval(updateDayOrNight, 1000 * 60 * 60 * 60)
    return () => clearInterval(interval)
  }, [])
  return state
}
