import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
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
    if (error.response?.status === 401) window.location.href = '/login'
    return Promise.reject(error.response?.data)
  },
)
export default axiosInstance
