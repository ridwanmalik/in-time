import { formatDuration, intervalToDuration } from "date-fns"
import { useEffect, useState } from "react"
import { capitalizeFirstLetter } from "../utils"

const Duration = () => {
  const [duration, setDuration] = useState<[string, number][]>([])
  const date = new Date("September 7, 1998")

  useEffect(() => {
    const intervalPeriod = 1 // seconds
    const intervalId = setInterval(() => {
      const now = new Date()
      const durationObj = intervalToDuration({ start: date, end: now })
      setDuration(Object.entries(durationObj))
    }, intervalPeriod * 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="grid grid-cols-3 gap-5 mt-3">
      {duration.map(([unit, number]) => (
        <div className="flex flex-col justify-center items-center">
          <div>{capitalizeFirstLetter(unit)}</div>
          <div className="glass min-w-full flex justify-center">{number}</div>
        </div>
      ))}
    </div>
  )
}

export default Duration
