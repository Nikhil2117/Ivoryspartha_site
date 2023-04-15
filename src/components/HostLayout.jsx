import React from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function HostLayout() {
    const activeStyle = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    return (
        <>
            <nav className="host-nav">
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ?
                        activeStyle : null} end>Caterers
                </NavLink>
                <NavLink
                    to="/host/income"
                    style={({ isActive }) => isActive ?
                        activeStyle : null}>Photographers
                </NavLink>
                <NavLink
                    to="/host/vans"
                    style={({ isActive }) => isActive ?
                        activeStyle : null}>DJs
                </NavLink>
                {/* <NavLink
                    to="/host/reviews"
                    style={({ isActive }) => isActive ?
                        activeStyle : null}>Reviews
                </NavLink> */}
            </nav>
            <Outlet />
        </>
    )
}