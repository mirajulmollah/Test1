import { useState } from "react"

function App() {

  const [language, setlanguage] = useState(
    {
      html: false,
      css: false,
      js: false,
    }
  )




  return (
    <div className="select-none">


      <label htmlFor="cb">
        <input type="checkbox" id='cb' checked={language.html} onChange={(e) => {
          setlanguage({
            ...language,
            html: e.target.checked
          })
        }} />
        HTML

      </label>

      <label htmlFor="cb">
        <input type="checkbox" id='cb' checked={language.css} onChange={(e) => {
          setlanguage({
            ...language,
            css: e.target.checked
          })
        }} />
        CSS

      </label>

      <label htmlFor="cb">
        <input type="checkbox" id='cb' checked={language.js} onChange={(e) => {
          setlanguage({
            ...language,
            js: e.target.checked
          })
        }} />
        JS

      </label>

      <br />
      <br />

      {language.css && 'css clicked'}
      <br />
      <br />
      {language.js && 'js clicked'}
      <br />
      <br />
      {language.html && 'html clicked'}




    </div>
  )
}
export default App