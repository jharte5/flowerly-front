import {combineReducers} from 'redux';
import authUserReducer from './authUserReducer'
import strainReducer from './strainReducers'


export default combineReducers({
    authUser: authUserReducer,
    strainR: strainReducer    
})     