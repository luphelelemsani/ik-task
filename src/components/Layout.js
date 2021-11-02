import React from "react"
import "../styles/global.css"
import "typeface-montserrat"
import Navbar from "./Navbar"

import { graphql, useStaticQuery } from "gatsby"

export default function Layout({ children }) {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          copyright
        }
      }
    }
  `)
  const { copyright } = data.site.siteMetadata

  return (
    <div className="layout font-montserrat ">
      <Navbar />
      <div className="content">{children}</div>
      <footer style={{ backgroundColor: "#4296CB" }}>
        <p className="p-8  pl-24 flex flex-row justify-start items-center text-white">
          <img src="/Logo_footer.svg" alt="Logo Footer" className="mx-6" />
          {copyright} &copy;
        </p>
      </footer>
    </div>
  )
}
