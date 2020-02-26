import React from 'react'
import PropTypes from 'prop-types'

const ProfileTop = ({profile: {
    status,
    company,
    location,
    website,
    social,
    user: {name,avatar}

}}) => {
    return (
        <div class="profile-top bg-navbar p-2">
        <img
          className="round-img my-1"
          src={avatar}
            alt={name}
        />

    <h1 class="large text-main">{name}</h1>
    <p class="lead text-main">{status} {company && <span> at {company}</span>}</p>
    <p class="text-main">{location && <span>{location}</span>}</p>
        <div class="icons my-1">
            {
                website && (
                    <a href={website}>
                    <i class="fas fa-globe fa-2x"></i>
                    </a>
                )
            }
          {
              social && social.twitter && (
                <a href={social.twitter}>
                <i class="fab fa-twitter fa-2x"></i>
                </a>
              )
          }
          {
              social && social.facebook && (
                <a href={social.facebook}>
                <i class="fab fa-facebook fa-2x"></i>
                </a>
              )
          }
          {
              social && social.linkedin && (
                <a href={social.linkedin}>
                <i class="fab fa-linkedin fa-2x"></i>
                </a>  
              )
          }
          {
              social && social.instagram && (
                <a href={social.instagram}>
                <i class="fab fa-instagram fa-2x"></i>
                </a>
              )
          }
        </div>
      </div>
    )
}

ProfileTop.propTypes = {
    profile: PropTypes.object.isRequired
}

export default ProfileTop
