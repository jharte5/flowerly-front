import {combineReducers} from 'redux';
import authUserReducer from './authUserReducer'
// import friendReducer from './friendReducer.js'

export default combineReducers({
    authUser: authUserReducer,
    // friend: friendReducer,
})     