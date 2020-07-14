import React from "react"

import SEO from "../components/seo"
import Layout from "../components/layout"

//images
import html5 from "../images/tech/html-5.svg"
import css3 from "../images/tech/css-3.svg"
import javascript from "../images/tech/javascript.svg"
import sass from "../images/tech/sass.svg"
import wordpress from "../images/tech/wordpress.svg"
import bootstrap from "../images/tech/bootstrap.svg"
import figma from "../images/tech/figma.svg"
import mysql from "../images/tech/mysql.svg"
import nodejs from "../images/tech/nodejs.svg"
import react from "../images/tech/react.svg"
import gatsby from "../images/tech/gatsby.svg"
import java from "../images/tech/java.svg"

const About = () => {
  return (
    <>
      <SEO
        title={`About me - Rishit Patel`}
        desc={`Hey there! I'm Rishit Patel, a web developer and software developer.`}
        dateMod={`2020-06-17`}
        pathname={`/about`}
      />
      <div>
        <Layout>
          <div className="cContainer about">
            <h1>About me</h1>
            <p>
              Hey there! I'm Rishit Patel, a web developer and software
              developer. I love to create awesome things for the web. I’m
              currently studying Computer Programmer Analyst at Canadore
              College.
            </p>
            <h1>Tech Stack</h1>
            <div className="techs">
              <div className="tech">
                <img src={html5} alt="HTML5" title="HTML" />
              </div>
              <div className="tech">
                <img src={css3} alt="CSS" title="CSS" />
              </div>
              <div className="tech">
                <img src={javascript} alt="JavaScript" title="JavaScript" />
              </div>
              <div className="tech">
                <img src={sass} alt="Sass" title="Sass" />
              </div>
              <div className="tech">
                <img src={wordpress} alt="WordPress" title="WordPress" />
              </div>
              <div className="tech">
                <img src={bootstrap} alt="Bootstrap" title="Bootstrap" />
              </div>
              <div className="tech">
                <img src={figma} alt="Figma" title="Figma" />
              </div>
              <div className="tech">
                <img src={mysql} alt="MySQL" title="MySQL" />
              </div>
              <div className="tech">
                <img src={nodejs} alt="NodeJS" title="NodeJS" />
              </div>
              <div className="tech">
                <img src={react} alt="React" title="React & React Native" />
              </div>
              <div className="tech">
                <img src={gatsby} alt="Gatsby" title="Gatsby" />
              </div>
              <div className="tech">
                <img src={java} alt="Java" title="Java" />
              </div>
            </div>
          </div>
        </Layout>
      </div>
    </>
  )
}

export default About
