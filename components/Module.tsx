import React, { FC } from "react"
import { MODULE_TYPES, TIME_ZONES } from "../constants"
import Clock from "./Clock"
import Duration from "./Duration"
import Stopwatch from "./Stopwatch"

type Option = {
  timeZone?: TIME_ZONES
}

type ModuleProps = {
  title: string
  type?: MODULE_TYPES
  options?: Option
}

const Module: FC<ModuleProps> = ({ title, type, options }) => {
  return (
    <div className="module glass">
      <h1>{title}</h1>
      {type === MODULE_TYPES.CLOCK && <Clock timeZone={options?.timeZone} />}
      {type === MODULE_TYPES.STOPWATCH && <Stopwatch />}
      {type === MODULE_TYPES.DURATION && <Duration />}
    </div>
  )
}

Module.defaultProps = {
  type: MODULE_TYPES.CLOCK,
  options: {},
}

export default Module
