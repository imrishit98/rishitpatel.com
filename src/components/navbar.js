import React from "react"
import { Link } from "gatsby"

import Logo from "../images/rp-logo.svg"

const Navbar = () => {
  return (
    <nav>
      <div className="cContainer navbar">
        <div className="brand">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
