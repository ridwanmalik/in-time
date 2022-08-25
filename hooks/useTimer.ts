import { useRef, useState } from "react"

const useTimer = (initialState = 0) => {
  const [timer, setTimer] = useState(initialState)
  const [isActive, setIsActive] = useState(false)
  const [isPaused, setIsPaused] = useState(true)
  const countRef = useRef<NodeJS.Timer | NodeJS.Timeout | undefined>(undefined)

  const handlePlay = () => {
    if (isActive) setIsActive(true)
    setIsPaused(false)
    countRef.current = setInterval(() => {
      setTimer(timer => timer + 1)
    }, 1000)
  }

  const handlePause = () => {
    clearInterval(countRef.current)
    setIsPaused(true)
  }

  const handleReset = () => {
    clearInterval(countRef.current)
    setIsActive(false)
    setIsPaused(true)
    setTimer(0)
  }

  return {
    timer,
    isActive,
    isPaused,
    handlePlay,
    handlePause,
    handleReset,
  }
}

export default useTimer
