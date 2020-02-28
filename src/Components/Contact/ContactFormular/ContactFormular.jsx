import React from 'react'
import './ContactFormular.scss'

const ContactFormular = () => {
    return (

        <div className="ContactFormular">
            <h2>Send En Besked</h2>
            <form >

                <label >Navn:</label>
                <input className="w-100" type="text" />

                <label >Email:</label>
                <input className="w-100" type="email" />

                <label >Telefonnr. :</label>
                <input className="w-100" type="text" />

                <label >Besked:</label>
                <textarea name="text" className="w-100" ></textarea>

                <input className="Submit" type="submit" value="Send Besked" />
            </form>
        </div>
    )
}

export default ContactFormular
