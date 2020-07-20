import jwt_decode from 'jwt-decode'
import { History } from "./History/History";
import setAuthToken from '../Axios/SetAuthToken'
import { logout, checkReloadToken} from '../../actions/authUserActions'



const checkTokenAuth = store => {
    let jwtToken = localStorage.getItem('jwtToken')
    let decoded;
    if (jwtToken) {
        decoded = jwt_decode(jwtToken)
        const currentTime = Date.now() / 1000
        if (decoded.exp < currentTime) {
            store.dispatch(logout())
            History('/login')
        }else{
            setAuthToken(jwtToken)
            store.dispatch(checkReloadToken(decoded))
        }
    }
}

export default checkTokenAuth