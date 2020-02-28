import React from 'react'
import { NavLink } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'
import './MobileNav.scss'


const MobileNav = () => {
    return (

        <nav class="navbar navbar-expand-xl navbar-light justify-content-end">
          
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse col-12" id="navbarNav">
            <ul className="navbar-nav text-center">
                    <li>
                        <NavLink exact to="/" className="NavbarLink" activeClassName="NavbarLink--Active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/events" className="NavbarLink" activeClassName="NavbarLink--Active">Events</NavLink>
                    </li>
                    <li>
                        <NavLink to="/shop" className="NavbarLink" activeClassName="NavbarLink--Active">Shop</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="NavbarLink" activeClassName="NavbarLink--Active">Contact us</NavLink>
                    </li>
                </ul>
                <div className="float-right w-75 MobileSearch">
                < SearchBar />
                </div>
            </div>
        </nav>
    )
}

export default MobileNav
