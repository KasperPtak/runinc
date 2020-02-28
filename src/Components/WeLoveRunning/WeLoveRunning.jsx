import React from 'react'
import './WeLoveRunning.scss'
import Hero from '../../GFX/hero.jpg'


const WeLoveRunning = () => {
    return (
        <div>
            <img className="w-100" src={Hero} alt="We Love Running" title="We Love Running"/>  
            <h2 className="HeroText">We Love <span>Running</span></h2>
        </div>
    )
}

export default WeLoveRunning
