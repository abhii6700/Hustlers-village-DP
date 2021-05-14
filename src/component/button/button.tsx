import React from 'react'
import './button.styles.scss'

interface Btnprops {
    classname: string,
    label: string,
    icon?: any
    alt?: any
}

const Button: React.FC<Btnprops> = ({ classname, label, icon, alt }) => {
    return (
        <button className={classname}>
            <div className='label'>{label}</div>
            {
                icon? icon: ''
            }
            
        </button>
    )
}

export default Button
