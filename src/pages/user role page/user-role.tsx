import React, { useState} from 'react'
import UserRoleCard from '../../component/user role card/user-role-card'
import './user-role.styles.scss'
import designer from '../../assets/Designer.svg'
import developer from '../../assets/Developer.svg'
import recruiter from '../../assets/Recruiter.svg'
import other from '../../assets/other.svg'

interface URprops{
    userroles: {
        title: string,
        image: any
    }[]
   
}

const UserRole: React.FC = () => {
    const [userroles] = useState<URprops['userroles']>([{
        title: 'Designer',
        image: designer
    }, {
            title: 'Developer',
            image: developer
    }, {
        title: 'Recruiter',
        image: recruiter
    }, {
        title: 'Other',
        image: other
    }])

    const mapRoles = (): JSX.Element[]=> {
       return userroles.map(userrole => (<UserRoleCard title={userrole.title} image={userrole.image}/>))
    }

    return (
        <div className='user-role container'>
            <div className="user-role-content-wrapper">
                <div className="user-role-title">
                    <h2>Are you a designer, developer or recruiter?</h2>
                </div>
                <div className="select-roles">
                    {mapRoles()}
                </div>
            </div>
            
        </div>
    )
}

export default UserRole;
