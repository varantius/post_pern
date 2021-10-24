import axios from "axios";

export const API = axios.create({
    // baseURL: 'https://randomuser.me/api/',
    baseURL: 'http://localhost:7000/',
    responseType: "json"
})