import React from "react"
import { Link } from "gatsby"

import Logo from "../images/rp-logo.svg"

const Navbar = () => {
  return (
    <nav className="nav">
      <div className="navContainer">
        <div className="brand">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
        </div>
        <div className="links">
          <Link to="/" activeClassName="active">
            Home
          </Link>
          <Link to="/about/" activeClassName="active">
            About
          </Link>
          <Link to="/blog/" activeClassName="active">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
