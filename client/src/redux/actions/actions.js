import * as types from './actionTypes.js';
import axios from './axios.js'


export const fetch = () => async (dispatch) => {
    try {
        const { data } = await axios.get('/');
        console.log("Fetch is called", data);
        dispatch({
            type: types.GET_POSTS,
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}
export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await axios.post('/', post);
        console.log(data);
        dispatch({
            type: types.POST_POST,
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}
export const deletePost = (id) => async (dispatch) => {
    try {
        await axios.delete(`/${id}`);

        dispatch({
            type: types.DELETE_POST,
            payload: id
        })
    }
    catch (error) {
        console.log(error.message)
    }
}
export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`/${id}`, post);
        dispatch({
            type: types.UPDATE_POST,
            payload: data
        })
    }
    catch (error) {
        console.log(error.message)
    }
}
export const likePost = (id) => async (dispatch) => {
    try {
        const { data } = await axios.patch(`/${id}/likes`);
        console.log("Like Post", data);
        dispatch({
            type: types.LIKE_POST,
            payload: data
        })
    }
    catch (error) {
        console.log(error)
    }
}