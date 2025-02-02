import React from 'react'
import style from './Home.module.css'
import ProductDisplay from '../ProductDisplay/ProductDisplay'
import CategorySlider from '../CategorySlider/CategorySlider'
import MainSlider from '../MainSlider/MainSlider'
export default function Home() {
    
  return( <>
  <div className='mx-11 my-11'>
  <MainSlider/>
  </div>
  <div className='mx-10 my-10'>
    <CategorySlider/>
  </div>
    <ProductDisplay/>
    </>
  )
}
