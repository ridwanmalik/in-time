import useTimer from "../hooks/useTimer"
import { formatTime } from "../utils"

const Stopwatch = () => {
  const { timer, isActive, isPaused, handlePlay, handlePause, handleReset } = useTimer()

  return (
    <div className="stopwatch-card">
      <p className="clock text-6xl font-medium my-5">{formatTime(timer)}</p>
      <div className="buttons flex gap-2">
        <button className="glass py-2" onClick={isPaused ? handlePlay : handlePause}>
          {isPaused ? "Play" : "Pause"}
        </button>
        <button className="glass py-2" onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>
    </div>
  )
}
export default Stopwatch
