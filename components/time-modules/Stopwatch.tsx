"use client"

import useTimer from "@/hooks/useTimer"
import { formatTime } from "@/utils"
import { Button } from "@/components/ui/button"
import { Play, Pause, RotateCcw } from "lucide-react"

const Stopwatch = () => {
  const { timer, isActive, isPaused, handlePlay, handlePause, handleReset } = useTimer()

  return (
    <div className="text-center space-y-6">
      <div className="py-4">
        <p className="clock text-4xl md:text-5xl font-light text-gray-100 tracking-wide">
          {formatTime(timer)}
        </p>
      </div>
      
      <div className="flex gap-3 justify-center">
        <Button 
          size="sm"
          onClick={isPaused ? handlePlay : handlePause}
          className="bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
        >
          {isPaused ? <Play className="h-4 w-4 mr-2" /> : <Pause className="h-4 w-4 mr-2" />}
          {isPaused ? "Play" : "Pause"}
        </Button>
        <Button 
          variant="outline" 
          size="sm"
          onClick={handleReset} 
          disabled={!isActive}
          className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-gray-100 disabled:opacity-30 disabled:hover:bg-transparent"
        >
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>
    </div>
  )
}
export default Stopwatch
