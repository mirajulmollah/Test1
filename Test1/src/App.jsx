import { useState } from "react"

function App() {

  const [data, setdata] = useState({
    name: '',
    email: ''
  })
  function nameHandeller(e) {
    setdata({ ...data, name: e.target.value })
  }

  function emailHandeler(e) {
    setdata({ ...data, email: e.target.value })
  }

  function inputhandeler(e) {
    // const name=e.target.name
    // const value=e.target.value
    //destucture kore nilam
    const { name, value } = e.target
    // setdata({}) state vitor {} karon ata object asbe er vitor

    setdata({ ...data, [name]: value })
  }


  return (
    <>
      <input type='text'
        placeholder="Enter Your text"
        value={data.name}
        className="border mt-2 ml-2"
        name='name'
        onChange={inputhandeler} />
      <h1>{data.name}</h1>
      <br></br>

      <input type='text'
        placeholder="Enter Your email"
        value={data.email}
        className="border mt-2 ml-2"
        name='email'
        onChange={inputhandeler} />


      <h1>{data.email}</h1>
      <br></br>
      <button onClick={(e) => {
        setdata({
          name: '',
          email: ''
        })


      }} className="border">Click Me</button>


    </>
  )
}
export default App