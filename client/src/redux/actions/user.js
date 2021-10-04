import * as types from './actionTypes';
import { auth, provider } from '../../firebase';

const registerStart = () => ({
    type: types.REGISTER_START
})
const registerSuccess = (user) => ({
    type: types.REGISTER_SUCCESS,
    payload: user
})
const registerError = (error) => ({
    type: types.REGISTER_ERROR,
    payload: error
})

export const registerInitiate = (user) => async (dispatch) => {
    dispatch(registerStart());
    console.log(user);
    await auth
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
            if (res) {
                res.updateProfile({
                    displayName: user.firstName + " " + user.lastName

                }).then(
                    (s) => {
                        console.log(s)
                    }// perform any other operation
                )
            }
            dispatch(registerSuccess(res));
        })
        .catch(error => {
            dispatch(registerError(error.message))
        })
}

export const signIn = () => async (dispatch) => {
    await auth
        .signInWithPopup(provider)
        .then(result => {
            dispatch(setUser(result.user))
        })
        .catch(err => alert(err.message));
}

const loginStart = () => ({
    type: types.LOGIN_START
})
const loginSuccess = (user) => ({
    type: types.LOGIN_SUCCESS,
    payload: user
})
const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    payload: error
})
const logoutStart = () => ({
    type: types.LOGOUT_START
})
const logoutSuccess = (user) => ({
    type: types.LOGOUT_SUCCESS,
    payload: user
})
const logoutError = (error) => ({
    type: types.LOGOUT_ERROR,
    payload: error
})

export const setUser = (user) => ({
    type: types.SET_USER,
    payload: user

})


export const loginInitiate = (email, password) => async (dispatch) => {
    dispatch(loginStart());
    await auth
        .signInWithEmailAndPassword(email, password)
        .then(res => {
            console.log("User is", res);
            dispatch(loginSuccess(res));
        })
        .catch(error => {
            dispatch(loginError(error.message))
        })
}


export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        auth
            .signOut()
            .then(res => {
                dispatch(logoutSuccess(null));
            })
            .catch(error => {
                dispatch(logoutError(error.message))
            })
    }
}
