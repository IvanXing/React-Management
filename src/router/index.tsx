import { createHashRouter, createBrowserRouter, Navigate, useRoutes } from 'react-router-dom'
import Welcome from '@/views/Welcome'
import Login from '@/views/Login'
import Error403 from '@/views/403'
import Error404 from '@/views/404'

const router = [
  {
    path: '/',
    element: <Welcome />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <Navigate to='/404' />
  },
  {
    path: '/403',
    element: <Error403 />
  },
  {
    path: '/404',
    element: <Error404 />
  }
]

export default function Router() {
  return useRoutes(router)
}

// export default createBrowserRouter(router)
