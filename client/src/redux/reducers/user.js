import * as types from '../actions/actionTypes';


const initialState = {
    loading: false,
    user: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case types.AUTH:
            localStorage.setItem("profile", JSON.stringify({ ...action?.data })) //This will us to keep us login even after we refresh the page..
            return {
                ...state,
                user: action?.data
            };
        case types.LOGOUT:
            localStorage.clear();
            return { ...state, user: null };
        default:
            return state
    }
}

export default userReducer;