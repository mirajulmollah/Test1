import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Products() {

  const [Product, setProduct] = useState([]);

  const fetchData = async () => {

    const responce = await axios('https://fakestoreapi.com/products')
    setProduct(responce.data)



  }


  useEffect(() => {
    fetchData()

  }, [])
  return (
    <div className="grid grid-cols-4 gap-6 p-6">
      {Product.map((responces) => {
        return (
          <div key={responces.id} className="bg-white rounded-xl p-4 shadow-lg hover:shadow-2xl transition-all duration-300">
            <img src={responces.image} className="w-full h-48 object-contain"></img>

            <div >
            <h1 className=" text-black font-bold mt-3 text-lg">{responces.title}</h1>
            <p className="text-sky-600 font-bold ">
              {responces.price}$
            </p>
            <p className="text-yellow-500 mt-2">
              Rating: ⭐ {responces.rating.rate} ({responces.rating.count} reviews)
            </p>
            {/* <button className="bg-slate-900 text-white px-4 py-2 rounded-lg  w-full hover:bg-sky-600 ">
              Add to Cart
            </button> */}
            </div>
          </div>
        )



      })}
    </div>
  )
}

export default Products