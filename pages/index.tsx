import type { NextPage } from "next"
import Head from "next/head"
import { Module } from "../components"
import { MODULE_TYPES, TIME_ZONES } from "../constants"

const Home: NextPage = () => {
  return (
    <div className="home w-screen h-screen overflow-auto bg-slate-900 text-white">
      <Head>
        <title>In Time</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container mx-auto">
        <div className="glass my-8">
          <h1 className="text-2xl">In Time</h1>
        </div>
        <main className="main grid grid-cols-5 gap-5">
          <Module title="Bangladesh" />
          <Module title="Singapore" options={{ timeZone: TIME_ZONES.ASIA_SINGAPORE }} />
          <Module title="Finland" options={{ timeZone: TIME_ZONES.EUROPE_HELSINKI }} />
          <Module title="India" options={{ timeZone: TIME_ZONES.ASIA_KOLKATA }} />
          <Module title="Stopwatch" type={MODULE_TYPES.STOPWATCH} />
        </main>
      </div>
    </div>
  )
}

export default Home
