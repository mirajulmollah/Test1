import React, { useState } from 'react'

function App() {

  const [language,setLanguage] = useState({
    html:false,
    css:false,
  })




  return (
    <div>
      <div className='select-none'>
  <label htmlFor="html">
    <input type="checkbox" id="html" checked={language.html} onChange={(e) => setLanguage({
      ...language,
      html:e.target.checked})} />
    HTML
  </label>

  <label htmlFor="css">
    <input type="checkbox" id="css" checked={language.css} onChange={(e) => setLanguage({
      ...language,
      css:e.target.checked})} />
    CSS
  </label>
</div>

      
    </div>
  )
}

export default App