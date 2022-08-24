import useTimer from "../hooks/useTimer"
import { formatTime } from "../utils"

const Stopwatch = () => {
  const { timer, isActive, isPaused, handleStart, handlePause, handleResume, handleReset } = useTimer(0)

  return (
    <div className="stopwatch-card">
      <p className="clock text-6xl font-medium my-5">{formatTime(timer)}</p>
      <div className="buttons flex gap-2">
        {!isActive && !isPaused ? (
          <button className="glass py-2" onClick={handleStart}>
            Start
          </button>
        ) : isPaused ? (
          <button className="glass py-2" onClick={handlePause}>
            Pause
          </button>
        ) : (
          <button className="glass py-2" onClick={handleResume}>
            Resume
          </button>
        )}
        <button className="glass py-2" onClick={handleReset} disabled={!isActive}>
          Reset
        </button>
      </div>
    </div>
  )
}
export default Stopwatch
