import Module from "../components/Module"
import { MODULE_TYPES, TIME_ZONES } from "../constants"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-950 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
            In Time
          </h1>
          <p className="text-gray-400 text-lg">Global time tracking made beautiful</p>
          <div className="mt-6 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
        </div>

        {/* Grid */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <Module title="Bangladesh" />
          <Module title="Singapore" options={{ timeZone: TIME_ZONES.ASIA_SINGAPORE }} />
          <Module title="Finland" options={{ timeZone: TIME_ZONES.EUROPE_HELSINKI }} />
          <Module title="India" options={{ timeZone: TIME_ZONES.ASIA_KOLKATA }} />
          <Module title="Stopwatch" type={MODULE_TYPES.STOPWATCH} />
          <Module title="My Age" type={MODULE_TYPES.DURATION} />
        </main>
      </div>
    </div>
  )
}