import type { NextPage } from "next"
import Head from "next/head"
import { Module } from "../components"
import Stopwatch from "../components/Stopwatch"

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
          <Module title="Singapore" options={{ timeZone: "Asia/Singapore" }} />
          <Module title="Finland" options={{ timeZone: "Europe/Helsinki" }} />
          <Module title="India" options={{ timeZone: "Asia/Kolkata" }} />
          <Module title="Stopwatch" type="STOPWATCH" />
        </main>
      </div>
    </div>
  )
}

export default Home
