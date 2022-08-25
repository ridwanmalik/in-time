import { formatInTimeZone } from "date-fns-tz"
import React, { FC, useEffect, useState } from "react"
import { TIME_ZONES } from "../constants"

type ClockProps = {
  timeZone?: TIME_ZONES
}

const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

const defaultProps = {
  timeZone: systemTimeZone as TIME_ZONES,
}

const Clock: FC<ClockProps> = ({ timeZone }) => {
  const [clock, setClock] = useState({
    time: "0:00:00",
    amPm: "AM",
  })

  useEffect(() => {
    const intervalPeriod = 1 // seconds
    const intervalId = setInterval(() => {
      const dateTimeNow = new Date()
      const tz = timeZone ? timeZone : defaultProps.timeZone
      const formattedTime = formatInTimeZone(dateTimeNow, tz, "h:mm:ss aa")
      const time = formattedTime.slice(0, -3)
      const amPm = formattedTime.slice(-3).trim()
      setClock({ time, amPm })
    }, intervalPeriod * 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <p className="clock text-6xl font-medium my-5">
      {clock.time}
      <span className="text-base ml-2">{clock.amPm}</span>
    </p>
  )
}

Clock.defaultProps = defaultProps

export default Clock
