
import './App.css'
import Navbar from './Component/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Contact from './Component/Contact'
import Help from './Component/Help'
import { Routes, Route } from 'react-router-dom'



function App() {

<<<<<<< HEAD
  const [language, setLanguage] = useState({
    html: false,
    css: false,
  })

  function onHandle(e) {
    
   const key=(e.target.name)
   setLanguage({
    ...language,
    [key]:e.target.checked
   })

=======
>>>>>>> 1271966 (Initial commit)

  }

  const SA =Object.values(language).every(items=> items===true)
  // console.log(SA)


  return (
<<<<<<< HEAD
    <div>
      <div className='select-none'>

        <label htmlFor="sa">
          <input type="checkbox" id="sa" 
          checked={SA} 
          onChange={(e)=>{
            setLanguage({
              html:e.target.checked,
              css:e.target.checked
            })
          }} 
          />
          Select All
        </label>

        <label htmlFor="html">
          <input type="checkbox" id="html" name="html" checked={language.html} onChange={onHandle} />
          HTML
        </label>

        <label htmlFor="css">
          <input type="checkbox" id="css" name="css" checked={language.css} onChange={onHandle} />
          CSS
        </label>
      </div>


    </div>
=======
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
>>>>>>> 1271966 (Initial commit)
  )
}


export default App



