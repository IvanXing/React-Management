import { useEffect } from 'react'
import request from '@/utils/request'
import axios from 'axios'

const Login = () => {
  useEffect(() => {
    request
      .get('/users', {
        id: 12345,
        pass: '1123'
      })
      .catch(error => {
        console.log('error', error)
      })
  }, [])
  return <div>Login111</div>
}

export default Login
