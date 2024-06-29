import axios from 'axios'

// 创建实例
const instance = axios.create({
  baseURL: '/api',
  timeout: 8000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
})

const request = {
  get(url: string, params: any) {
    return instance.get(url, { params })
  },
  post(url: string, params: any) {
    return instance.post(url, params)
  }
}

export default request
