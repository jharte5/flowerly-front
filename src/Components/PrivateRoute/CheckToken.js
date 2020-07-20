import jwt_decode from 'jwt-decode'

export const checkToken = () =>{
    let jwtToken = localStorage.getItem('jwtToken')
    if (jwtToken) {
        let decoded = jwt_decode(jwtToken)
        const currentTime = Date.now() / 1000
        if (decoded.exp < currentTime) {
            return false
        } else {
            return true
        }
    } else {
        return false
    }
}