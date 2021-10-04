import * as types from '../actions/actionTypes';


const initialState = {
    loading: false,
    user: null,
    error: null
}

const userReducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case types.REGISTER_START:
        case types.LOGIN_START:
        case types.LOGOUT_SUCCESS:
            return {
                ...state,
                loading: true,
            };
        case types.REGISTER_SUCCESS:
        case types.LOGIN_SUCCESS:
        case types.LOGOUT_START:
            return {
                ...state,
                loading: false,
                user: action.payload
            };
        case types.REGISTER_ERROR:
        case types.LOGIN_ERROR:
        case types.LOGOUT_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        case types.SET_USER:
            return {
                ...state,
                user: action.payload
            };
        default:
            return state
    }
}

export default userReducer;