import React from 'react'

export const About = () => {
    return (
        <section className='about__content'>
            <div className="about-headshot__block"><img src={require("../images/michaelpwright-selfie-square-800px.jpg").default} alt="Michael P Wright headshot" className="about-headshot__image" /></div>
        </section>
    )
}
