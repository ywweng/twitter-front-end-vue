import axios from 'axios'

// TODO: API URL
const baseURL = 'https://project-simple-twitter.herokuapp.com/api'

const axiosInstance = axios.create({
  baseURL,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')

    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    
    return config
  },
  (err) => Promise.reject(err)
)

export const apiHelper = axiosInstance