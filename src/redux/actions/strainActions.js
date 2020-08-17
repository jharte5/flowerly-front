import axios from 'axios'
import {GET_ALL_STRAINS, GET_BY_RACE} from '../constants/strainConstants'

export const getAllStrains = (itemInfo) => async (dispatch) => {
    try {
        let success = await axios.get('https://strainapi.evanbusse.com/j9OINSQ/strains/search/all')
        //console.log("object entries", Object.entries(success.data))
        const strainArray = Object.entries(success.data).map(entry=>{
            return{
                name: entry[0],
                info: entry[1]
            }
        })
        console.log('strainArray', strainArray)
        dispatch({
            type:GET_ALL_STRAINS,
            payload: strainArray
        })
    } catch (e) {
        console.log('ERROR', e)
        return Promise.reject(e.response.data.message)
    }
}

export const getByRace = (itemInfo) => async(dispatch) => {
        try{
            let success = await axios.get('https://strainapi.evanbusse.com/j9OINSQ/strains/search/all')
            const raceArray = Object.entries(success.data)
            console.log('Array', raceArray)
            dispatch({
                type:GET_BY_RACE,
                payload:raceArray
            })
        } catch (e) {
            console.log('Error', e)
            return Promise.reject(e.response.data.message)
        }
    }

// export const getByRaceH = (itemInfo) => async(dispatch) => {
//     try{
//         let success = await Axios.get('https://strainapi.evanbusse.com/j9OINSQ/strains/search/race/hybrid')
//         const hybridArray =
//         dispatch({
//             type:GET_BY_RACE,
//             payload:success.data
//         })
//     } catch (e) {
//         console.log('Error', e)
//         return Promise.reject(e.response.data.message)
//     }
// }
// export const getByRaceI = (itemInfo) => async(dispatch) => {
//     try{
//         let success = await Axios.get('https://strainapi.evanbusse.com/j9OINSQ/strains/search/race/indica')
//         dispatch({
//             type:GET_BY_RACE,
//             payload:success.data
//         })
//     } catch (e) {
//         console.log('Error', e)
//         return Promise.reject(e.response.data.message)
//     }
// }
// export const getByRaceS = (itemInfo) => async(dispatch) => {
//     try{
//         let success = await Axios.get('https://strainapi.evanbusse.com/j9OINSQ/strains/search/race/sativa')
//         dispatch({
//             type:GET_BY_RACE,
//             payload:success.data
//         })
//     } catch (e) {
//         console.log('Error', e)
//         return Promise.reject(e.response.data.message)
//     }
// }