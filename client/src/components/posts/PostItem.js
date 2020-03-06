import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
import Moment from 'react-moment'
import {connect} from 'react-redux'
import {addLikes, removeLike,deletePost} from '../../actions/post'

const PostItem = ({
  addLikes,
  removeLike,
  deletePost,
  auth,
  post:{_id, text,name,avatar, user, likes, comments,date},
  showAction 
}) => {
   return (
        <div class="post bg-white my-1 p-1">
            <div>
              <Link to ={`/profile/${user}`}>
                <img
                  class="round-img"
                  src={avatar}
                  alt={name}
                />
                <h4>{name}</h4>
              </Link>
            </div>

            <div>
              <p class="my-1">
                {text}
              </p>
            <p className="post-date">Posted on <Moment format='YYYY/MM/DD'>{date}</Moment></p>
              {showAction && <Fragment>
                <button onClick={e => addLikes(_id)} className="btn btn-primary">
                <i class="fas fa-thumbs-up"></i> {likes.length > 0 && (<span>{likes.length}</span>)} 
              </button>
              <button  onClick={e => removeLike(_id)} className="btn btn-dark">
                <i class="fas fa-thumbs-down"></i>
              </button>
              <Link to={`/posts/${_id}`} class="anchor anchor-main p-1">
                Discussion {comments.length > 0 && (<span className="comment-count">{comments.length}</span>)} 
              </Link>
              {!auth.loading && user === auth.user._id && (
                  <button onClick={e => deletePost(_id)} type="button" className="btn btn-danger">
                      <i className='fas fa-times'></i>
                  </button>
              )}
              </Fragment>}
            </div>
        </div>
   )
}

PostItem.defaultProps = {
  showAction: true
}

PostItem.propTypes = {
    post: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    addLike: PropTypes.func.isRequired,
    removeLike: PropTypes.func.isRequired,
    deletePost: PropTypes.func.isRequired 
}
const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
  mapStateToProps,
  {addLikes, 
    removeLike,
    deletePost}
  )(PostItem)
