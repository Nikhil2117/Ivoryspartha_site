import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header() {
    const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }
return (
    <header className='headerHome'>
        <NavLink className="site-logo" to="/">Ivoryspartha</NavLink>
        <nav>
            <NavLink to='/host' style={({isActive})=>isActive ? activeStyle : null}>Services</NavLink>
            <NavLink to="/about" style={({isActive}) => isActive ? activeStyle : null }>About</NavLink>
            {/* <NavLink to="/vans" style={({isActive}) => isActive ? activeStyle : null }>Booking</NavLink> */}
        </nav>
    </header>
)
}