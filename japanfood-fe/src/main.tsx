import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Map from './pages/map.tsx'
import Menu from './pages/Menu.tsx'
import Login from './pages/Login.tsx'
import Register from './pages/Register.tsx'
import AuthContext from './contexts/AuthContext.tsx'

const router = createBrowserRouter([{
  path: "/",
  element: <Home />
},
{
  path: "/map",
  element: <Map />
},
{
  path: "/menu",
  element: <Menu />
},
{
  path: "/login",
  element: <Login />
},
{
  path: "/register",
  element: <Register />
}])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}/>
    </AuthContext>
  </React.StrictMode>,
)
