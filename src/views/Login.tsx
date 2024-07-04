import { useEffect } from 'react'
import request from '@/utils/request'

const Login = () => {
  useEffect(() => {
    request.post('/users/login', {
      id: 12345,
      pass: '1123'
    })
  }, [])
  return <div>Login111</div>
}

export default Login
