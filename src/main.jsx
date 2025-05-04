import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Signin from './pages/Signin.jsx'
import Login from './pages/login.jsx'

const router = createBrowserRouter([
  {
    path: '',
    element: <App/>,
    children: [
      {
        path: '',
        element: <Signin/>
      },
      {
        path: 'Login',
        element: <Login/>
      },
      {
        path: 'Home',
        element: <Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
