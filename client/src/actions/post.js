import axios from 'axios'
import {setAlert} from './alerts'
import {
    GET_POSTS,
    POST_ERROR,
    UPDATE_LIKES,
    DELETE_POST
} from './types'


// Get Post 

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