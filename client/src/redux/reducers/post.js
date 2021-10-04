import * as types from '../actions/actionTypes';

const initialState = {
    posts: []
}

const postReducer = (state = initialState, action) => {

    switch (action.type) {

        case types.GET_POSTS:
            return {
                posts: action.payload
            };
        case types.POST_POST:
            return {
                posts: [...state.posts, action.payload]
            };
        case types.DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(item => item._id !== action.payload)
            };
        case types.UPDATE_POST:
        case types.LIKE_POST:
            return {
                posts: state.posts.map((p) => p._id === action.payload._id ? action.payload : p)
            }

        default:
            return state;

    }
}

export default postReducer;