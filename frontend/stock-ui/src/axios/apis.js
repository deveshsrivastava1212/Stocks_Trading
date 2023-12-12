import axios from "axios"

const API = axios.create({
    baseURL :  "https://localhost:5000/api/"
})

export const RegisterUser = (data) => API.post("users/", data)
export const LoginUser = (data) => API.post("auth/", data)

