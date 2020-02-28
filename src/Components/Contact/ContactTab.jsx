import React from 'react'
import './ContactTab.scss'
import ContactMap from './ContactMap/ContactMap'
import Footer from '../Layout/Footer/Footer'
import ContactFormular from './ContactFormular/ContactFormular'

const ContactTab = () => {
    return (
        <article className="row no-gutters">
            <section className="p-0 col-lg-6">
                < ContactMap />
                < Footer />
            </section>

            <section className="col-lg-6">
            < ContactFormular />
            </section>


        </article>
    )
}

export default ContactTab
