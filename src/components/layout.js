import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import Navbar from "./navbar"
import Footer from "./footer"
import Code from "./code"
import "../styles/main.css"

const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
}

const Layout = props => {
  return (
    <>
      <Navbar />
      <MDXProvider components={components}>
        <main style={{ marginTop: "87px" }}>{props.children}</main>
      </MDXProvider>
      <Footer />
    </>
  )
}

export default Layout
