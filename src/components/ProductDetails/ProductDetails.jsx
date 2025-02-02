import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { ClimbingBoxLoader } from 'react-spinners';

export default function ProductDetails() {
 let {id,category}= useParams()
 const [product, setProduct] = useState(null)
 const [relatedProducts, setRelatedProducts] = useState(null)
 const [error, setError] = useState(null)
  function getSpecificProduct(id){
  axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
  .then((res)=>{
    setProduct(res.data.data)
  }
  ).catch(()=>setError('product not Found'))

  }
  async function getRelatedProducts(){
    let req= await axios.get('https://ecommerce.routemisr.com/api/v1/products')
  let newProduct=  req.data.data.filter((product)=>product.category.name==category)
  console.log('adsasd',newProduct);
  setRelatedProducts(newProduct)
        // console.log(newProduct);
  }
  useEffect(() => {
    getSpecificProduct(id)
    getRelatedProducts()
  }, [id])
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
  
<div className='flex flex-wrap mx-14  p-4 shadow'>
    <div className=" lg:w-1/4 md:w-1/2 sm:w-full ">
    <img src={product?.imageCover} className='w-full shadow' alt="" />
    </div>




    <div className=" lg:w-3/4 md:w-1/2 sm:w-full ps-2 flex flex-col justify-center align-middle">
    <div className=''>
    <h2>{product?.title}</h2>
    <p className='text-gray-500 pt-2'>{product?.description}</p>
    <p className='my-1'>Brand: {product?.brand.name}</p>
    <p className='text-gray-600 my-2 flex'>Category:<span className='text-active ms-1'>{product?.category.name}</span></p>
    <span className='flex justify-between my-1'><p>Price : {product?.price} EGP</p> <p>{product?.ratingsAverage}<i className='fas fa-star text-yellow-400'></i></p></span>
    </div>
    <button className='bg-active text-white p-2 rounded hover:bg-green-900 transition-all duration-500 mt-2 '><i className='fas fa-plus text-sm'></i> Add To Cart</button>

    </div>
  </div>
  {relatedProducts?<div className='mx-14 py-2 grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-2 shadow rounded'>
    {relatedProducts?.map((relative)=><div key={relative._id} className='relative p-2 rounded overflow-hidden group shadow'>
      <Link to={`/productDetails/${relative._id}/${relative.category.name}`}><img src={relative.imageCover} className='w-full ' alt="" />
      <h2>{relative.title.split(' ',2).join(' ')}</h2>
      <div className='flex justify-between text-sm'>
    {relative.priceAfterDiscount ? <div className='flex gap-1'><span className='text-red-700 line-through'>{relative.price} </span>
    <span>{relative.priceAfterDiscount} EGP</span></div> :<span>{relative.price} EGP</span>}
    <span ><i className='fas fa-star text-yellow-400'></i> {relative.ratingsAverage}</span>
    </div>{relative.priceAfterDiscount? <span className='rounded-sm bg-red-700 text-white p-1 absolute top-1 left-1'> 
      sale
    </span>:''}</Link>
    <button className='group-hover:translate-y-0 bg-active p-2 rounded border-[1px] border-solid border-active text-white w-full hover:bg-green-800 transition-all  duration-500 translate-y-40 '>Add To Cart</button>

    </div>)}
    
  </div>:<div className='h-screen flex justify-center items-center'>
    <ClimbingBoxLoader color='green'/>
      </div>}
  </>
  )
}
