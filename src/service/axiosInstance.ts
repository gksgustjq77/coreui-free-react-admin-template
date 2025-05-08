import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'http://hejdev1.goqual.com:8080',
  timeout: 50000,
})

axiosInstance.interceptors.request.use(
  (config) => {
    const userAuth = localStorage.getItem('auth')
    const parseUserAuth = userAuth ? JSON.parse(userAuth) : null
    config.headers.Authorization = `Bearer ${parseUserAuth?.token}`

    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    response.config.url?.includes('/api/auth/login') &&
      localStorage.setItem('auth', JSON.stringify(response.data))

    return response.data
  },
  async (error) => {
    return Promise.reject(error.response?.data)
  },
)
export default axiosInstance
