import axios from 'axios'

const Axios = axios.create({
    baseURL: '/api',
    timeout: 500000
})

export default Axios;