import React, { useState } from 'react'
import Button from '../../../component/button/button'
import {useHistory} from 'react-router-dom'
import './hero-section.styles.scss'
import {FaArrowRight} from 'react-icons/fa'
import background from '../../../assets/Hero-vector.svg'
import Input from '../../../component/input/input'

interface HSprops{
    username:{
        yourname: string
    }[]
}

const HeroSection: React.FC = () => {
    const [username, setUsername] = useState<HSprops['username']>([{
            yourname: 'hustlersvillage.com/'
    }])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
        setUsername({
            ...username,
            [e.target.name] : `hustlersvillage.com/${e.target.value}`
        })
    }

    const history = useHistory()

    const handleClick = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void =>{
        e.preventDefault()
        console.log(username)
        history.push('/select-role')
    }

    
    return (
    
        
        <div className='hero-section container' style={{ backgroundImage: `url(${background})`}}>
            {/* <Header/> */}
            <div className="hero-content-wrapper">
            <div className="hero-title">
                <h1>let your <span>hustle</span> speak for itself.</h1>
            </div>
            <div className="hero-enter-name"> 
                <Input classname='input'
                 name='yourname' 
                  text='text'
                   placeholder='your-name'
                   onchange={handleChange}
                   />
                <Button
                  classname='icon-btn blue' 
                  label='start Hustling'  
                  icon={<FaArrowRight/>}
                  onclick={handleClick}
                  />
            </div>
            <div className='hero-subtitle'>
                <p>It’s free, and takes less than a minute</p>
            </div>
            </div>
            
        </div>
    )
}

export default HeroSection;
