import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
      <header className="curvy-bg flex-column-center">
        <h1>Free English Online</h1>
        <nav>
            <ul>
                <li>
                <NavLink className="nav-link" to="/">Home</NavLink>
                </li>
                <li>
                <NavLink activeStyle={{textDecoration: 'underline'}} className="nav-link" to="/posts">Posts</NavLink>
                </li>
                <li>
                <NavLink activeStyle={{textDecoration: 'underline'}} className="nav-link" to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
