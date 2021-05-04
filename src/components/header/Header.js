import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header>
        <h1 className="header-title">Free Spoken English</h1>
        <nav>
          <ul>
            <li>
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, .6),0 -1px 3px rgba(255, 255, 255, .6)", backgroundColor: "rgb(94, 46, 228)" }} className="nav-link" to="/posts">Posts</NavLink>
            </li>
            <li>
              <NavLink activeStyle={{ boxShadow: "0px 4px 4px rgba(0, 0, 0, .6),0 -1px 3px rgba(255, 255, 255, .6)", backgroundColor: "rgb(94, 46, 228)" }} className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
