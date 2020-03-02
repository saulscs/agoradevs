import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'

const PostItem = ({auth,post:{_id, text,name,avatar, user, likes, comments,date}}) => {
   return (
        <div class="post bg-white my-1 p-1">
            <div>
              <a href="profile.html">
                <img
                  class="round-img"
                  src={avatar}
                  alt={name}
                />
                <h4>{name}</h4>
              </a>
            </div>

            <div>
              <p class="my-1">
                {text}
              </p>
            <p className="post-date">Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>
              <button class="btn btn-primary">
   <i class="fas fa-thumbs-up"></i> {likes.length > 0 && (<span>{likes.length}</span>)} 
              </button>
              <button class="btn btn-dark">
                <i class="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/post/${_id}`} class="anchor anchor-main p-1">
                Discussion {comments.length > 0 && (<span className="comment-count">{comments.length}</span>)} 
              </Link>
              {!auth.loading && user === auth.user._id && (
                  <button type="button" className="btn btn-danger">
                      <i className='fas fa-times'></i>
                  </button>
              )}
            </div>
        </div>
   )
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PostItem)
