import React from 'react'
import { NavBar } from './NavBar'

const HeaderLogo = ({ taglineObj }) => {
    return (
        <section className='header'>
            <div className="logo__block"> <img src={require(`../images/mpwMinecraft3DGoldLogo512.png`).default} alt="MPW website logo" className="header__logo" />  </div>
            <div className="nav-tagline__block"> <p className="nav-tagline__text">Michael Wright wants to rule the world, so it can be measured and improved.</p> <p>{taglineObj.text}</p> </div>
            <NavBar />
            
        </section>
    )
}

export default HeaderLogo
