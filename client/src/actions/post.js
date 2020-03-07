import axios from 'axios'
import {setAlert} from './alerts'
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST,
    ADD_POST,
    GET_POST,
    ADD_COMMENT,
    REMOVE_COMMENT
} from './types'


// Get Posts

export const getPosts = () => async dispatch => {
    try {
        const res = await axios.get('/api/post')
        dispatch ({
            type: GET_POSTS,
            payload: res.data
        }) 
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
    
}

//Add Likes 

export const addLikes = id => async dispatch => {
    try {
        const res = await axios.put(`/api/post/like/${id}`)
        dispatch ({
            type: UPDATE_LIKES,
            payload: {id, likes: res.data}
        }) 
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
    
}

//Remove Like

export const removeLike = id => async dispatch => {
    try {
        const res = await axios.delete(`/api/post/unlike/${id}`)
        dispatch ({
            type: UPDATE_LIKES,
            payload: {id, likes: res.data}
        }) 
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
    
}

// Delete Post

export const deletePost = id => async dispatch => {
    try {
         await axios.delete(`/api/post/${id}`)
        dispatch ({
            type: DELETE_POST,
            payload: id
        }) 
        dispatch(setAlert('Post Removed', 'Success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
    
}

// Add Post

export const addPost = formData => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
       const res =  await axios.post('/api/post', formData,config)
        dispatch ({
            type: ADD_POST,
            payload: res.data
        }) 
        dispatch(setAlert('Post Created', 'Success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}

//Get Post

export const getPost = id => async dispatch => {
    try {
        const res = await axios.get(`/api/post/${id}`)
        dispatch ({
            type: GET_POST,
            payload: res.data
        }) 
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
    
}


// Add Comment 

export const addComment = (postId, formData) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    try {
       const res =  await axios.post(`/api/post/comment/${postId}`, formData,config)
        dispatch ({
            type: ADD_COMMENT,
            payload: res.data
        }) 
        dispatch(setAlert('Comment Added', 'Success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}




// Delete Comment 

export const deleteComment = (postId, commentId) => async dispatch => {
     
    try {
        await axios.delete(`/api/post/comment/${postId}/${commentId}` )
        dispatch ({
            type: REMOVE_COMMENT,
            payload: commentId
        }) 
        dispatch(setAlert('Comment Remove', 'Success'))
    } catch (err) {
        dispatch({
            type: POST_ERROR,
            payload: {msg: err.response.statusText, status: err.response.status}
        });
    }
}