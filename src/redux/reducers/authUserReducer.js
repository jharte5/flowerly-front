import { SIGN_UP, LOGIN, LOGOUT } from '../constants/authUserConstants';

const initialState = {
    isAuthenticated: false,
    user: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SIGN_UP:
            return {
            ...state,
            };
        case LOGIN:
            console.log(action.payload);
            return {
                ...state,
                isAuthenticated: true,
                user:{
                    username: action.payload.username,
                },
            };
        case LOGOUT:
            return {
                ...state,
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
}
