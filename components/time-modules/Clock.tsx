"use client"

import { formatInTimeZone } from "date-fns-tz"
import React, { FC, useEffect, useState } from "react"
import { TIME_ZONES } from "@/constants"

type ClockProps = {
  timeZone?: TIME_ZONES
}

const systemTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone

const defaultProps = {
  timeZone: systemTimeZone as TIME_ZONES,
}

const Clock: FC<ClockProps> = ({ timeZone = defaultProps.timeZone }) => {
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
    <div className="text-center my-6">
      <p className="clock text-4xl md:text-5xl font-light text-gray-100 tracking-wide">
        {clock.time}
      </p>
      <span className="text-sm text-blue-400 font-medium mt-1 block">{clock.amPm}</span>
    </div>
  )
}


export default Clock
