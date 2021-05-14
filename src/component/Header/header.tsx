import React from 'react'
import Button from '../button/button'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {FaArrowRight} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

const Header = () => {
    return (
        <div className='header container'>
            <div className='content-wrapper'>
                <div className="logo">
                    <Link to='/'><h2>Huslters Village</h2></Link>
                </div>
                <div className="options">
                    <Link to ="/" className='option' ><p>Home</p></Link>
                    <a href="/" className='option'><p>How it works?</p></a>
                    <a href="/" className='option'><p>Contact</p></a>
                    <Link to ="/login" className='option'><Button classname='secondary-btn' label='Login' /></Link>
                    <Link to ="/signup" className='option'><Button classname='icon-btn' label='Register' icon={<FaArrowRight/>} /></Link>
                </div>
                <div className="options-mobile">
                    <GiHamburgerMenu className='hamburger-menu'/>
                </div>
            </div>

        </div>
    )
}

export default Header;