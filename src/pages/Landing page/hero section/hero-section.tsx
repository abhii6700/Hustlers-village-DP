import React from 'react'
import Button from '../../../component/button/button'
import './hero-section.styles.scss'
import {FaArrowRight} from 'react-icons/fa'
import background from '../../../assets/Hero-vector.svg'
import Header from '../../../component/Header/header'
import Input from '../../../component/input/input'

const HeroSection = () => {
    return (
        
        <div className='hero-section container' style={{ backgroundImage: `url(${background})`}}>
            {/* <Header/> */}
            <div className="hero-content-wrapper">
            <div className="hero-title">
                <h1>let your <span>hustle</span> speak for itself.</h1>
            </div>
            <div className="hero-enter-name"> 
                <Input classname='input' name='hero-input'  text='text' placeholder='hustlersvillage.com/your-name'/>
                <a href='/'><Button classname='icon-btn blue' label='start Hustling'  icon={<FaArrowRight/>}/></a>
            </div>
            <div className='hero-note'>
                <p>It’s free, and takes less than a minute</p>
            </div>
            </div>
            
        </div>
    )
}

export default HeroSection;
