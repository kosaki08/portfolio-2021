import { useEffect, useState } from 'react'
import { debounce } from 'lodash'

import useWindowSize from './useWindowSize.hook'

interface ReturnType {
  x: number
  y: number
}

const useMousePosition = (): ReturnType => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { windowSize } = useWindowSize()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) =>
      setMousePosition({
        x: e.clientX / windowSize.windowWidth,
        y: e.clientY / windowSize.windowHeight,
      })

    const handleMouseMoveDebounced = debounce((e: MouseEvent) => {
      handleMouseMove(e)
    }, 10)

    window.addEventListener('mousemove', handleMouseMoveDebounced)

    return () => {
      window.removeEventListener('mousemove', handleMouseMoveDebounced)
    }
  }, [windowSize.windowHeight, windowSize.windowWidth])

  return mousePosition
}

export default useMousePosition
