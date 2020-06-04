import React from "react"
import { Link } from "gatsby"

import githubLogo from "../images/github.svg"
import linkedinLogo from "../images/linkedin.svg"
import codepenLogo from "../images/codepen.svg"
import heart from "../images/heart.svg"

const Footer = () => {
  return (
    <footer className="footer cContainer">
      <div className="row1">
        <div className="links">
          <Link to="/">Privacy Policy</Link>
          <Link to="/">Terms and Conditions</Link>
        </div>
        <div className="social">
          <a
            href="https://github.com/imrishit98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/imrishit98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} alt="LinkedIn" />
          </a>
          <a
            href="https://codepen.io/imrishit98/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={codepenLogo} alt="CodePen" />
          </a>
        </div>
      </div>
      <div className="row2">
        <span>
          Made with <img src={heart} alt="Love" /> by{" "}
          <span style={{ fontWeight: "500" }}>Rishit Patel</span>
        </span>
      </div>
    </footer>
  )
}

export default Footer
