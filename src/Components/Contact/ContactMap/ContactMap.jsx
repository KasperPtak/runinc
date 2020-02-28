import React from 'react'
import './ContactMap.scss'
import Map from '../../../GFX/map.JPG'

const ContactMap = () => {
    return (
        <div className="position-relative">
            <img className="img-fluid" src={Map} alt="GoogleMaps" title="Google Maps"/>
            <h2 className="ContactHeader">Contact</h2>
        </div>
    )
}

export default ContactMap
