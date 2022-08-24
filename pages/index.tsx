import type { NextPage } from "next"
import Head from "next/head"
import { Module } from "../components"

const Home: NextPage = () => {
  return (
    <div className="home w-screen h-screen overflow-auto bg-slate-900 text-white">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main grid grid-cols-4 gap-5 m-5">
        <Module title="Bangladesh" />
        <Module title="Singapore" options={{ timeZone: "Asia/Singapore" }} />
      </main>
    </div>
  )
}

export default Home
