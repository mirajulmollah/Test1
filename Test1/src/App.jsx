import { useState } from "react"

function App() {

  const[name,setname]=useState('')
  const[email,setEmail]=useState('')

  return (
    <>
    <input type='text' placeholder="Enter Your text" value={name} className="border mt-2 ml-2" onChange={(e)=>{

      setname(e.target.value)
      

    }}/>
    <h1>{name}</h1>
    <br></br>

    <input type='text' placeholder="Enter Your email" value={email} className="border mt-2 ml-2" onChange={(e)=>{

      setEmail(e.target.value)
      

    }}/>

    
    <h1>{email}</h1>
    <br></br>
    <button onClick={()=>{
      setname("")
      setEmail('')
    }} className="border">Click Me</button>
    

    </>
  )
}
export default App