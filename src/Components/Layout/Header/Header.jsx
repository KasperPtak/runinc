import React from 'react'
import Nav from './Nav/Nav'
import SearchBar from './SearchBar/SearchBar'
import './Header.scss'
import MobileNav from './MobileNav/MobileNav'

const Header = () => {
    return (
        <header className="row no-gutters">


            <h1 className="p-1 col-2">
                <a href="/home">
                 <span className="text-danger">RUN</span>INC 
                 </a>
                 </h1>

            <div className="MobileNav col-10 container">
                < MobileNav />
            </div>
            
            <div className="col-6 m-auto DesktopNav">
                < Nav />
            </div>
            <div className="col-4 m-auto DesktopNav">
                < SearchBar />
            </div>





        </header>
    )
}

export default Header