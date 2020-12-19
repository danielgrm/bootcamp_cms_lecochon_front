import axios from 'axios'
import { getToken, removeToken } from './auth';
import history from './history'

const UrlApi = `https://immense-oasis-94300.herokuapp.com/`


const http = axios.create({
    baseURL: UrlApi
})

http.defaults.headers['Content-type'] = 'application/json'

if (getToken()) {
    http.defaults.headers["x-auth-token"] = getToken();
}

// http.interceptors.response.use(
//     response => response,
//     error => {

//       //  const status = error.response.status
//         const { response: { status } } = error

//         if (error.message === 'Network Error' && !error.message) {
//             alert('no network connection')
//         }

//         switch (status) {
//             case 401:
//                 console.log('invalid token...')
//                 removeToken()
//                 history.push('/login')
//                 break;
//             default:
//                 console.log(status, `error:  ${status}`)
//                 break;
//         }

//         // axios.interceptors.response.eject(interceptors) // global
//         return Promise.reject(error)
//     }
// )

export default http;