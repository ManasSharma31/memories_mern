import * as types from './actionTypes';
import axios from './axios';

export const signIn = (user, history) => async (dispatch) => {
    try {

        const { data } = await axios.post("/user/signIn", user);
        if (data?.status === "error") {
            dispatch({
                type: types.ERROR,
                payload: data.message
            });
        }
        else {
            dispatch({
                type: types.AUTH,
                data
            });
            history.push("/");
        }


    } catch (error) {

        dispatch({
            type: types.ERROR,
            payload: error.message
        });
    }
}
export const signUp = (user, history) => async (dispatch) => {
    try {
        const { data } = await axios.post("/user/signUp", user);
        console.log(data);
        if (data?.status === "error") {
            dispatch({
                type: types.ERROR,
                payload: data.message
            });
        }
        else {
            dispatch({
                type: types.AUTH,
                data
            });
            history.push("/");

        }



    } catch (error) {
        console.log(error);
    }
}
