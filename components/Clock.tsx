import { formatInTimeZone } from "date-fns-tz"
import React, { FC, useEffect, useState } from "react"

type ClockProps = {
  timeZone?: string
}

const defaultProps = {
  timeZone: "Asia/Dhaka",
}

const Clock: FC<ClockProps> = ({ timeZone }) => {
  const [clock, setClock] = useState("0:00:00 AM")

  useEffect(() => {
    const interval = 1 // seconds
    const intervalFn = setInterval(() => {
      const dateTimeNow = new Date()
      const tz = timeZone ? timeZone : defaultProps.timeZone
      const formattedDateTime = formatInTimeZone(dateTimeNow, tz, "pp")
      setClock(formattedDateTime)
    }, interval * 1000)
    return () => clearInterval(intervalFn)
  }, [])

  return <p className="clock text-4xl my-5">{clock}</p>
}

Clock.defaultProps = defaultProps

export default Clock
