import React, { useState } from 'react'
import style from './ProductDisplay.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'
export default function ProductDisplay() {
  const [products, setProducts] = useState(null)
 async function getProducts(){
  let req= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  console.log(req.data.data);
    setProducts(req.data.data)
}
  useEffect(() => {
    getProducts()
  
  }, [])
  
  return (
    <>
    {products?<div className='m-4 grid gap-5 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 '>
    {products?.map((product)=><div key={product._id} className='shadow px-3 py-2 rounded relative group overflow-hidden cursor-pointer' >
   <Link to={`/productDetails/${product._id}`}> <img src={product.imageCover} className='w-full' alt="" /><h3 className='text-active text-[12px]'>{product.category.name}</h3>
    <h2>{product.title.split(' ',2).join(' ')}</h2>
    <div className='flex justify-between text-sm'>
    {product.priceAfterDiscount ? <div className='flex gap-1'><span className='text-red-700 line-through'>{product.price} </span>
    <span>{product.priceAfterDiscount} EGP</span></div> :<span>{product.price} EGP</span>}
    <span ><i className='fas fa-star text-yellow-400'></i> {product.ratingsAverage}</span>
    </div>
   {product.priceAfterDiscount? <span className='rounded-sm bg-red-700 text-white p-1 absolute top-1 left-1'> 
      sale
    </span>:''}</Link>
    <button className='group-hover:translate-y-0 bg-active p-2 rounded border-[1px] border-solid border-active text-white w-full hover:bg-green-800 transition-all  duration-500 translate-y-40 '>Add To Cart</button>
    </div>)}

    </div>:<div className='h-screen flex justify-center items-center'>
    <ClimbingBoxLoader color='green' />
      </div>}
    </>
  )
}
