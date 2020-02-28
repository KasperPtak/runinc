import React from 'react'
import './SearchBar.scss'

 const SearchBar = () => {
    return (
        <div >
            <input className="w-50" type="text"/>
            <input type="submit" value="search"/>
        </div>
    )
}

export default SearchBar