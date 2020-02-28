import React from 'react'
import { NavLink } from 'react-router-dom'
import './Nav.scss'

const Nav = () => {
    return (
        <nav className="text-center">
            
                <ul className="m-auto">
                    <li>
                        <NavLink exact to="/" className="NavbarLink text-decoration-none" activeClassName="NavbarLink--Active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className="NavbarLink text-decoration-none" activeClassName="NavbarLink--Active">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className="NavbarLink text-decoration-none" activeClassName="NavbarLink--Active">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="NavbarLink text-decoration-none" activeClassName="NavbarLink--Active">Contact us</NavLink>
                    </li>
                </ul>
            
        </nav>
    )
}

export default Nav
