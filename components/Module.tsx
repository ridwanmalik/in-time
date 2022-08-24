import React, { FC } from "react"
import Clock from "./Clock"
import Stopwatch from "./Stopwatch"

enum moduleTypes {
  CLOCK = "CLOCK",
  STOPWATCH = "STOPWATCH",
}

type Option = {
  timeZone?: string
}

type ModuleProps = {
  title: string
  type?: moduleTypes
  options?: Option
}

const Module: FC<ModuleProps> = ({ title, type, options }) => {
  return (
    <div className="module glass">
      <h1>{title}</h1>
      {type === moduleTypes.CLOCK && <Clock timeZone={options?.timeZone} />}
      {type === moduleTypes.STOPWATCH && <Stopwatch />}
    </div>
  )
}

Module.defaultProps = {
  type: moduleTypes.CLOCK,
  options: {},
}

export default Module
