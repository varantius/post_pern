import {$host, $authHost} from "./index"
import axios from "axios";
import jwtDecode from "jwt-decode";


export const registration = async (name, email, password) => {
    const {data} =  await $host.post('/auth/registration', {
        name, email, password
    })
    localStorage.setItem('token', data.token)
    // console.log(jwtDecode(data.token))
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    console.log("get login frontend")
    console.log( email, password)

    const {data} = await $host.post('/auth/login', {
        email, password
    })
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async() => {
    const {data} = await $authHost.get('/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}


export const getAllUsers = async () => {
    const {data} =  await $host.get('/users')
    return data
}

export const getOneUser = async (id) => {
    const {data} =  await $host.get('/users/' + id)
    return data
}