import React from 'react'
import './input.styles.scss'


interface Iprops{
    classname: string,
    text: string
    name: string
    placeholder: string
    label? : string
    onchange?: any
}

const Input: React.FC<Iprops> = ({classname, text, placeholder, label, name, onchange}) => {
    return (
        <div className='input-label'>
            <label htmlFor={name}>{label? label:''}</label>
            <input 
            
            className={classname} 
            type={text}
            name={name}
            placeholder={placeholder}
            onChange={onchange}
            
            > 
            </input>
        </div>
    )
}

export default Input;
