import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-slate-900 px-10 py-4 text-white">





      <div className="flex gap-8 items-center">


        <img src='https://png.pngtree.com/png-vector/20220930/ourmid/pngtree-shopping-logo-design-for-online-store-website-png-image_6239056.png' className="w-12 h-13" ></img>




        <div className="hover:text-sky-400 transition duration-300" >


          <NavLink to="/" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Home</NavLink>
        </div>




        <div className="hover:text-sky-400 transition duration-300">
          <NavLink to="/products" className={({ isActive }) => (isActive ? 'text-red-500' : '')}>Products</NavLink>
        </div>


      </div>


      <button className="bg-sky-500 px-5 py-2 rounded-lg hover:bg-sky-600 transition duration-300" >
        Login
      </button>


    </nav>

  )
}

export default Navbar