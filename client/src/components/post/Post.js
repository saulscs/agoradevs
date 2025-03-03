import React, {Fragment, useEffect} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Spinner from '../layout/Spinner'
import PostItem from '../posts/PostItem'
import CommentItem from '../post/CommentItem'
import CommentForm from './CommentForm'
import {getPost} from '../../actions/post'

 
const Post = ({getPost, post: {post, loading }, match}) => {
    useEffect ( () => {
        getPost(match.params.id)
    }, [getPost, match.params.id])
    return loading || post === null ? (
    <Spinner/> ) : (
    <Fragment>
        <Link to ='/posts' className="btn btn-dark">
            Back to post
        </Link>
        <PostItem post={post} showAction={false}/>
        <CommentForm postId={post._id}/>
        <div className="comments">
            {post.comments.map(comment => (
                <CommentItem key={comment._id} comment={comment} postId={post._id}/> 
            ))}
        </div>
    </Fragment> )
} 

Post.propTypes = {
getPost: PropTypes.func.isRequired,
post: PropTypes.object.isRequired 
}

const mapStateToProps = state => ({
    post: state.post 
})

export default connect(mapStateToProps,{getPost})(Post)
