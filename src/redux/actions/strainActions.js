import Axios from '../lib/Axios/Axios'
import axios from 'axios'
import {GET_ALL_STRAINS, GET_BY_RACE} from '../constants/strainConstants'

export const getAllStrains = (itemInfo) => async (dispatch) => {
    try {
        let success = await axios.get('https://strainapi.evanbusse.com/j9OINSQ/strains/search/all')
        const arrayOfWeed = Object.entries(success.data).map(entry=>{
            return{
                name: entry[0],
                info: entry[1]
            }
        })
        console.log('Array', arrayOfWeed)
        dispatch({
            type:GET_ALL_STRAINS,
            payload: arrayOfWeed
        })
    } catch (e) {
        console.log('ERROR', e)
        return Promise.reject(e.response.data.message)
    }
}

export const getByRace = (itemInfo) => async(dispatch) => {
    try{
        let success = await Axios.get('strainapi.evanbusse.com/j9OINSQ/strains/search/race/hybrid')
        dispatch({
            type:GET_BY_RACE,
            payload:success.data
        })
    } catch (e) {
        console.log('Error', e)
        return Promise.reject(e.response.data.message)
    }
}
// export const getByRace = (itemInfo) => async(dispatch) => {
//     try{
//         let success = await Axios.get('strainapi.evanbusse.com/j9OINSQ/strains/search/race/indica')
//         dispatch({
//             type:GET_BY_RACE,
//             payload:success.data
//         })
//     } catch (e) {
//         console.log('Error', e)
//         return Promise.reject(e.response.data.message)
//     }
// }
// export const getByRace = (itemInfo) => async(dispatch) => {
//     try{
//         let success = await Axios.get('strainapi.evanbusse.com/j9OINSQ/strains/search/race/sativa')
//         dispatch({
//             type:GET_BY_RACE,
//             payload:success.data
//         })
//     } catch (e) {
//         console.log('Error', e)
//         return Promise.reject(e.response.data.message)
//     }
// }