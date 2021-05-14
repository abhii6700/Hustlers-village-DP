import React from 'react'
import Button from '../button/button'
import './header.styles.scss'
import {FaArrowRight} from 'react-icons/fa'

const Header = () => {
    return (
        <div className='header container'>
            <div className='content-wrapper'>
                <div className="logo">
                    <a href='/'><h2>Huslters Village</h2></a>
                </div>
                <div className="options">
                    <a href="/" className='option' ><p>Home</p></a>
                    <a href="/" className='option'><p>How it works?</p></a>
                    <a href="/" className='option'><p>Contact</p></a>
                    <a href="/" className='option'><Button classname='secondary-btn' label='Login' /></a>
                    <a href="/" className='option'><Button classname='icon-btn' label='Register' icon={<FaArrowRight/>} /></a>
                </div>
            </div>

        </div>
    )
}

export default Header;