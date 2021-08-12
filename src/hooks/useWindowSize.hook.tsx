import { MutableRefObject, useState, useEffect, useRef } from 'react'
import { debounce } from 'lodash'

interface ReturnType {
  windowSize: {
    windowWidth: number
    windowHeight: number
  }
  windowSizeRef: MutableRefObject<{
    width: number
    height: number
  }>
}

const useWindowSize = (): ReturnType => {
  const [windowSize, setWindowSize] = useState({
    windowWidth: 0,
    windowHeight: 0,
  })

  const windowSizeRef = useRef({ width: 0, height: 0 })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
      })
    }

    windowSizeRef.current.width = window.innerWidth
    windowSizeRef.current.height = window.innerHeight

    const handleResizeDebounced = debounce(() => {
      handleResize()
    }, 50)

    handleResize()
    window.addEventListener('resize', handleResizeDebounced)
    return () => window.removeEventListener('resize', handleResizeDebounced)
  }, [])

  return { windowSize, windowSizeRef }
}

export default useWindowSize
