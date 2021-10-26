import axios from "axios";

export const API = axios.create({
    // baseURL: 'https://randomuser.me/api/',
    baseURL: 'http://localhost:7000/',
    responseType: "json"
})
//для запросов без автоирзации
const $host = axios.create({
    baseURL: 'http://localhost:7000'
})

// с авторизацией
const $authHost = axios.create({
    baseURL: 'http://localhost:7000'
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
    return config
}

$authHost.interceptors.request.use(authInterceptor)

export {
    $host,
    $authHost
}

