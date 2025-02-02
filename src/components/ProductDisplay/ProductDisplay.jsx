import React, { useState } from 'react'
import style from './ProductDisplay.module.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ClimbingBoxLoader } from 'react-spinners'
import { useQuery } from '@tanstack/react-query'
// imports

export default function ProductDisplay() {

 async function callApi(){
   return await axios.get('https://ecommerce.routemisr.com/api/v1/products')
   
  }


let {data , isError , error ,isFetching ,  isLoading}= useQuery({
  queryKey:['product'],
  queryFn:callApi
})




  // const [products, setProducts] = useState(null)
  const [pageNum, setPageNum] = useState(null)
  let nums=[];
//  async function getProducts(page){
//   let req= await axios.get(`https://ecommerce.routemisr.com/api/v1/products?limit=10&page=${page}`)
//   console.log(req.data);
//     setProducts(req.data.data)

    
// }

function getPageNumber(e){
  let page =e.target.getAttribute('page')
  getProducts(page)
}

  // useEffect(() => {
  //   getProducts()

  // }, [])
  


  return (
    <>
    {data?.data.data?<div className='m-4 grid my-24 gap-5 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 '>
    {data?.data.data?.map((product)=><div key={product._id} className='shadow px-3 py-2 rounded relative group overflow-hidden cursor-pointer' >
   <Link to={`/productDetails/${product._id}/${product.category.name}`}> <img src={product.imageCover} className='w-full' alt="" /><h3 className='text-active text-[12px]'>{product.category.name}</h3>
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



     <nav aria-label="Page navigation example">
  <ul className="flex items-center justify-center my-3 -space-x-px h-8 text-sm">
    <li>
      <Link to={""} className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 1 1 5l4 4" />
        </svg>
      </Link>
    </li>
    {pageNum?.map((el)=> <li onClick={getPageNumber}  key={el}>
      <a page={el} href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">{el}</a>
    </li>)}
   
    <li>
      <a href="#" className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m1 9 4-4-4-4" />
        </svg>
      </a>
    </li>
  </ul>
</nav>




    </>
  )
}
