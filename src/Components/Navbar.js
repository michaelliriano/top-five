import React from 'react'

function Navbar() {
  return (
    <div>
    <nav className="navbar">
      <div className="logo">
        <h3>Top Five</h3>
      </div>
      <ul className="nav-menu">
        <li className="nav-list">About</li>
        <li className="nav-list">Privacy</li>
        <li className="nav-list">Login</li>
      </ul>
      <div className="burger-menu">
          <div className="menu"></div>
          <div className="menu"></div>
          <div className="menu"></div>
      </div>
  </nav>
</div>
  )
}

export default Navbar
