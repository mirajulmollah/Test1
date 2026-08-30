import React, { useState } from 'react'



function App() {
  const [popup,setpopup]=useState(false)
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <button onClick={()=>{
        setpopup(true)
      }} className='bg-black text-white px-1 py-2 rounded-2xl border-white border-2'>show popup</button>
      
      {popup &&
      (<div className='h-screen w-screen bg-black/50 absolute top-0 left-0'></div>)}

      <button onClick={()=>{
        setpopup(false)
      }} className='absolute top-2 right-5 bg-black px-1 py-1'>❌</button>

      <div className='h-full w-full max-h-[20rem] max-w-[40rem] bg-[#242424] absolute flex justify-center items-center flex-col gap-5'>
        
        <h1 className='font-bold text-white'>⚠️ Confirm</h1>
        <p className='font-bold text-white'>Are you sure you want to delete this??</p>
        <div className=' flex gap-10'>  
        <button className='bg-black text-white px-3 py-2 rounded-2xl border-white border-2'>Yes</button>
        <button className='bg-black text-white px-3 py-2 rounded-2xl border-white border-2'>No</button>
       
        </div>
      
      </div>
      
    </div>
  )
}

export default App