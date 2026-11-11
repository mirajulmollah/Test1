import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Help from './Component/Help'
import { Routes, Route, Navigate, createBrowserRouter, RouterProvider } from 'react-router-dom'
import DetailedContact from './Component/DetailedContact'
import A1 from './Component/A1'
import A2 from './Component/A2'
import Layout from './Component/Layout'


function App() {
  const rau = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [

        {
          path: '/',
          element: < Home />,
        },
        {
          path: '/about',
          element: < About />,
        },
        {
          path: '/contact',
          element: < Contact />,
        },
        {
          path: '/help',
          element: < Help />,
        },
        
      ]
    }
  ])
  return (
    <>
      <div>
        <RouterProvider router={rau} />
        
      </div>





    </>
  )
}





export default App
