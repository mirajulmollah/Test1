import React from 'react'

import { Link,NavLink } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-slate-900 px-10 py-4 text-white">

            <h2 className="text-2xl font-bold text-sky-400">
                MyWebsite
            </h2>

            <div className="flex gap-8 items-center">


                <div className="hover:text-sky-400 transition duration-300" >

                    <NavLink to="/" className={({isActive })=> (isActive ? 'text-red-500' : ''  )}>Home</NavLink>
                </div>


                <div className="hover:text-sky-400 transition duration-300">
                    <Link to="/about" >About</Link>
                </div>
                <div className="hover:text-sky-400 transition duration-300">
                    <Link to="/contact" >Contact</Link>
                </div>
                <div className="hover:text-sky-400 transition duration-300">
                    <Link to="/help">Help</Link>
                </div>
            </div>

            <button className="bg-sky-500 px-5 py-2 rounded-lg hover:bg-sky-600 transition duration-300">
                Login
            </button>

        </nav>
    )
}

export default Navbar