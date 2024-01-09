import React from 'react'
import ReactDOM from 'react-dom/client'
import Nav from './components/sections/nav.jsx'
import Home from './pages/home/index.jsx'
import Products from './pages/products/index.jsx'
import Product from './pages/product/index.jsx'
import Cart from './pages/cart/index.jsx'
import Login from './pages/login/index.jsx'
import Register from './pages/register/index.jsx'
import Account from './pages/account/index.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
const router = createBrowserRouter([
 {
  element: <Nav/>,
  children : [
    {
      path: "/",
      element: <Home/>
    },

    {
      path: "/products",
      element: <Products/>
    },

    {path: '/product/:id', 
     element: <Product/>},

    {path: '/panier',
     element: <Cart/>},

    {path: '/connection', 
    element: <Login/>},

    {path: "/inscription", 
    element: <Register/>},

    {path:'/mon-compte', 
    element: <Account/>},
  ]

 }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

