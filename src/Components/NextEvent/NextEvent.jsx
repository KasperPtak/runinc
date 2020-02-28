import React from 'react'
import Event from '../../GFX/event.jpg'
import './NextEvent.scss'
import EventTab from './EventTab/EventTab'

const NextEvent = () => {
    return (
        <article className="row no-gutters EventContent">
            <section className="position-relative col-lg-9 p-0">
                <img className="img-fluid" src={Event} alt="Next Event" title="Events" />
                <h2 className="EventTekst">Next Events</h2>
            </section>
            <section className="col-lg-3">
                < EventTab />
            </section>
        </article>


    )
}

export default NextEvent

