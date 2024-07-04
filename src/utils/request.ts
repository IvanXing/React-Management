import { message } from 'antd'
import axios, { AxiosError } from 'axios'
import { showLoading, hideLoading } from './loading'
import storage from './storage'

console.log(import.meta.env)

// 创建实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
})

// 请求拦截器
instance.interceptors.request.use(
  config => {
    showLoading()
    const token = storage.get('token')
    if (token) {
      config.headers.Authorization = 'Token::' + token
    }
    // 如果mock为true，地址变为mock地址
    if (import.meta.env.VITE_MOCK === 'true') {
      config.baseURL = import.meta.env.VITE_MOCK_API
    } else {
      config.baseURL = import.meta.env.VITE_BASE_API
    }
    return {
      ...config
    }
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

// 响应拦截器
instance.interceptors.response.use(
  response => {
    hideLoading()
    const data = response.data
    if (data.code === 500001) {
      message.error(data.msg)
      localStorage.removeItem('token')
      location.href = '/login'
    } else if (data.code !== 0) {
      message.error(data.msg)
      return Promise.reject(data)
    }
    return data.data
  },
  error => {
    hideLoading()
    message.error(error.message)
    return Promise.reject(error.message)
  }
)

const request = {
  get<T>(url: string, params: any): Promise<T> {
    return instance.get(url, { params })
  },
  post<T>(url: string, params: any): Promise<T> {
    return instance.post(url, params)
  }
}

export default request
