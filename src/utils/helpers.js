import axios from 'axios'

// TODO: API URL
const baseURL = 'http://localhost:3000/api'

export const apiHelper = axios.create({
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