"use client"

import React, { FC } from "react"
import { MODULE_TYPES, TIME_ZONES } from "@/constants"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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

const Module: FC<ModuleProps> = ({ title, type = MODULE_TYPES.CLOCK, options = {} }) => {
  return (
    <Card className="bg-gray-900/60 border-gray-800/50 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:border-blue-500/30 group">
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-semibold text-gray-100 group-hover:text-blue-400 transition-colors duration-300">
          {title}
        </CardTitle>
        <div className="h-px bg-gradient-to-r from-blue-500/20 to-transparent"></div>
      </CardHeader>
      <CardContent className="pt-0">
        {type === MODULE_TYPES.CLOCK && <Clock timeZone={options?.timeZone} />}
        {type === MODULE_TYPES.STOPWATCH && <Stopwatch />}
        {type === MODULE_TYPES.DURATION && <Duration />}
      </CardContent>
    </Card>
  )
}


export default Module
