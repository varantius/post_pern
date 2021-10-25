import {$host, $authHost} from "./index"
import jwtDecode from "jwt-decode";


// export const registration = async (email, password) => {
//     const {data} = await $host.post('auth/registration', {
//         name, email, password
//     })
//     return jwtDecode(data.token)
// }
//
// export const login = async (email, password) => {
//     const {data} = await $host.post('auth/login', {
//         name, email, password
//     })
//     return jwtDecode(data.token)
// }
//
// export const check = async() => {
//     const response = await $host.post('auth/registration')
//     return response
// }
