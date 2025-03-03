import React, {useState} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addComment} from '../../actions/post'

const CommentForm = ({postId, addComment}) => {

    const [text, setText] = useState('')
    return (
        <div className="post-form">
            <div className="post-form-header bg-primary">
            <h3>Leave your comments </h3>
            </div>
            <form className="form my-1" 
                onSubmit={e => {
                e.preventDefault()
                addComment(postId,{ text })
                setText('')
            }}>
            <textarea 
                name="text"
                cols="30" 
                rows="5" 
                placeholder="Leave your comment"
                value={text}
                onChange= {e => setText(e.target.value)}
                required>
            </textarea>
            <input type="submit" value="Submit" className="btn btn-primary my-1" />
            </form>
        </div>
    )
}

CommentForm.propTypes = {
addComment: PropTypes.func.isRequired 
}

export default connect(null, {addComment })(CommentForm)
