import React from 'react'
import PropTypes from 'prop-types'
import  {Link} from 'react-router-dom'

const ProfileItem = ({profile: {
    user: {_id, name,avatar},
    status,
    company, 
    location,
    skills,
}}) => {
    return (
        <div className="profile bg-light">
            <img src={avatar} alt={name} className="round-img"></img>
            <div>
                <h2>{name}</h2>
                <p>{status} {company && <span> at{ company}</span>}</p>
                <p className="my-1">{location && <span>{location}</span>}</p>
                <Link to={`/profile/${_id}`} className="btn btn-primary">View Profile</Link>
            </div>
            <ul>
                {skills.slice(0, 4).map((skills, index)=> (
                    <li key={index} className="text-primary">
                        <li className="fas fa-check"></li>
                        {skills}
                    </li>
                ))}
            </ul>
        </div>
    )
}

ProfileItem.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileItem
