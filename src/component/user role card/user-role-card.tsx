import React from 'react'
import './user-role-card.styles.scss'

interface URCprops{
    title: string,
    image: any,
    alt?: string
}

const UserRoleCard: React.FC<URCprops> = ({title, image, alt}) => {
    return (
        <div className='user-role-card'>
            <img className='user-role-card-image' src={image} alt=''/>
            <h3>{title}</h3>
            
        </div>
    )
}

export default UserRoleCard;
