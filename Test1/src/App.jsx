import React, { useState } from 'react'

function App() {

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


  }

  const SA =Object.values(language).every(items=> items===true)
  // console.log(SA)


  return (
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
  )
}

export default App