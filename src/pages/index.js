import React from "react"
//import { Link } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="RishitPatel.com - Personal website of Rishit Patel"
      desc="RishitPatel.com is the personal website of Rishit Patel, a web developer and tech enthusiastic shares his work, thoughts and knowledge!"
      pathname={`/`}
    />
    <div className="hero">
      <span className="hero-small-up">Hi, I'm</span>
      <h1 className="hero-big">Rishit Patel</h1>
      <h2 className="hero-small-down">I make awesome websites!</h2>
    </div>
  </Layout>
)

export default IndexPage
