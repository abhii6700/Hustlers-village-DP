import React from 'react'
import './button.styles.scss'

interface Btnprops {
    classname: string,
    label: string,
    icon?: any
    alt?: any
    onclick?: any
}

const Button: React.FC<Btnprops> = ({ classname, label, icon, alt, onclick }) => {
    return (
        <button className={classname} onClick={onclick}>
            <div className='label'>{label}</div>
            {
                icon? icon: ''
            }
            
        </button>
    )
}

export default Button
