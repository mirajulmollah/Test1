import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Help from './Component/Help'
import { Routes, Route } from 'react-router-dom'






function App() {






  return (
    <>
      <div>
        <Navbar />
      </div>


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/help' element={<Help />} />
      </Routes>


    </>
  )
}





export default App
