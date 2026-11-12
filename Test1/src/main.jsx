import { createRoot } from 'react-dom/client'
import Home from './Component/Home.jsx'
import Products from './Component/Products.jsx'
import  Layout from './Component/Layout.jsx'
import App from './App.jsx'

import './index.css'

import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'

const rou=createBrowserRouter([
        {
                path: '/',
                element: <App/>,
                children: [
                        {
                                path: '/',
                                element: <Home />,
                        },
                        {
                                path: '/products',
                                element: <Products />,
                        },


                ]
        }

])


createRoot(document.getElementById('root')).render(


<>
<RouterProvider router={rou} />

        


</>





)

