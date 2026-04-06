import axios from "axios"

const API = axios.create({
  baseURL: "https://store-project-tssl.onrender.com/api"
})

export default API