import React from 'react'
import './input.styles.scss'


interface Iprops{
    classname: string,
    text: string
    name: string
    placeholder: string
    label? : string
}

const Input: React.FC<Iprops> = ({classname, text, placeholder, label, name}) => {
    return (
        <div className='input-label'>
            <label htmlFor={name}>{label? label:''}</label>
            <input 
            className={classname} 
            type={text}
            name={name}
            placeholder={placeholder}>
            </input>
        </div>
    )
}

export default Input;
