import React, { FC } from "react"
import Clock from "./Clock"

type Option = {
  timeZone?: string
}

type ModuleProps = {
  title: string
  options?: Option
}

const Module: FC<ModuleProps> = ({ title, options }) => {
  return (
    <div className="module glass">
      <h1>{title}</h1>
      <Clock timeZone={options?.timeZone} />
    </div>
  )
}

Module.defaultProps = {
  options: {},
}

export default Module
