import { useState } from 'react'
import './App.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Router from './router'

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  )

  // return <RouterProvider router={router} />
}

export default App
