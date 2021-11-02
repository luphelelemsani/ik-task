import React from "react"
import About from "../components/About"
import Card_detail from "../components/Card_detail"
import Hero from "../components/Hero"
import Layout from "../components/Layout"
import Logos from "../components/Logos"

export default function Home() {
  return (
    <div>
      <Layout>
        <div className="h-screen">
          <Hero />
        </div>
        <About />
        <Logos />
        <Card_detail />
      </Layout>
    </div>
  )
}
