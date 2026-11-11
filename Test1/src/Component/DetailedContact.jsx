import React from 'react'

import { useParams } from 'react-router-dom'

function DetailedContact() {
    const params=useParams()
    console.log(params)
    
  return (
    <div>DetailedContact:{params.cid}</div>
  )
}

export default DetailedContact