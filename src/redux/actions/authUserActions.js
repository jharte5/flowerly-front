import setAuthToken from '../lib/Axios/SetAuthToken'
import jwt_decode from "jwt-decode";
import { LOGIN, LOGOUT } from '../constants/authUserConstants'
import axios from '../lib/Axios/Axios'

export const signupApi = (userInfo) =>  async (dispatch) => {
    console.log(userInfo)
    try {
        await axios.post('/users/sign-up', userInfo)
        return Promise.resolve()
    }catch (e) {
        console.log(JSON.stringify(e))
        if (e.message) {
            return Promise.reject(e.message)
        } else {
            return Promise.reject(e.response.data.message)
        }
    }
}

export const loginApi = (userInfo) => async (dispatch) => {
    try {
        let success = await axios.post(
            "/users/login",
            userInfo
        );
        console.log(success.data)
        const { jwtToken } = success.data.token;
        dispatch(setAuthSuccessUser(jwtToken));
        return Promise.resolve();
    } catch (e) {
        if (e.response && e.response.status === 500) {
            return Promise.reject(e.response.data.message);
        }
        if (e.message) {
            return Promise.reject(e.message);
        }
    }
};
export const setAuthSuccessUser = (jwtToken) => (dispatch) => {
    console.log(jwtToken)
    setAuthToken(jwtToken);
    localStorage.setItem("jwtToken", jwtToken);
    let decoded = jwt_decode(jwtToken);
    dispatch({
        type: LOGIN,
        payload: decoded
    });
};
export const logout = () => (dispatch)=> {
    localStorage.removeItem('jwtToken')
    setAuthToken(false)
    dispatch({
        type: LOGOUT
    })
}

export const checkReloadToken = (decoded) => (dispatch) => {
    dispatch({
        type:LOGIN,
        payload:decoded,
    })
}