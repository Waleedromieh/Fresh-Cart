import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';

export default function ProductDetails() {
 let {id}= useParams()
 const [product, setProduct] = useState(null)
 const [error, setError] = useState(null)
//  console.log(id);
  function getSpecificProduct(id){
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  .then((res)=>{console.log(res.data.data)
    setProduct(res.data.data)
  }
  ).catch(()=>setError('product not Found'))

  }

  useEffect(() => {
    getSpecificProduct(id)
  }, [])
  if(product==null && error==null){
    return <div className='h-screen flex justify-center items-center'>
    <ClimbingBoxLoader color='green'/>
      </div>
  }
  if(error){
    return <div className='text-active h-screen w-full text-9xl flex justify-center items-center font-extrabold'>
      Product Not Found
    </div>
  }
  return (<>
  
<div className='flex flex-wrap mx-14 py-2 '>
    <div className=" lg:w-1/4 md:w-1/2 sm:w-full ">
    <img src={product?.imageCover} className='w-full shadow' alt="" />
    </div>




    <div className=" lg:w-3/4 md:w-1/2 sm:w-full ps-2 flex flex-col justify-center align-middle">
    <div className=''>
    <h2>{product?.title}</h2>
    <p className='text-gray-500 pt-2'>{product?.description}</p>
    <p className='my-1'>Brand: {product?.brand.name}</p>
    <p className='text-gray-600 my-2'>Category: {product?.category.name}</p>
    <span className='flex justify-between my-1'><p>Price : {product?.price} EGP</p> <p>{product?.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></p></span>
    </div>
    <button className='bg-active text-white p-2 rounded hover:bg-green-900 transition-all duration-500 mt-2 '><i className='fas fa-plus text-sm'></i> Add To Cart</button>

    </div>
  </div>
  
  </>
  )
}
