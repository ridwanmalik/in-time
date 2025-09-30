"use client"

import { formatDuration, intervalToDuration } from "date-fns"
import { useEffect, useState } from "react"
import { capitalizeFirstLetter } from "@/utils"
import { Badge } from "@/components/ui/badge"

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
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
      {duration.map(([unit, number]) => (
        <div key={unit} className="flex flex-col items-center space-y-3">
          <span className="text-xs text-gray-400 font-medium uppercase tracking-wider">
            {capitalizeFirstLetter(unit)}
          </span>
          <div className="bg-gray-800/60 border border-gray-700/50 rounded-lg px-4 py-3 min-w-[70px] text-center hover:border-blue-500/50 transition-colors duration-300">
            <span className="text-2xl font-light text-gray-100">{number}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Duration
