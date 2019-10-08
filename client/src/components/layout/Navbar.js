import React from 'react'

const Navbar = () => {
    return (
        <nav className="navbar bg-navbar">
          <h1>
            <a href="/dist/index.htm"> <i className="fas fa-book-reader"></i> Agora Devs </a>
          </h1>
          <ul>
            <li>
                <a href="profiles.html">Developers</a>
            </li>
            <li>
                <a href="register.html">Register</a>
            </li>
            <li>
                <a href="login.html">Login</a>
            </li>
          </ul>
        </nav>
    )
}

export default Navbar
