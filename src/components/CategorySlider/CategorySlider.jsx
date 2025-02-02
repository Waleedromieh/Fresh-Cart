import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';

export default function CategorySlider() {
  const [category, setCategory] = useState(null)
 async function getCategories(){
   let {data}=await axios.get('https://ecommerce.routemisr.com/api/v1/categories')
   console.log('hiii',data.data);
setCategory(data.data)
  }
  useEffect(()=>{
    getCategories()
  },[])
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 5,
  };
  return (<>
  
  <Slider {...settings}>
     {category?.map((category)=><div>
      <img src={category.image} className='w-full bg-cover h-52' alt="" />
     </div>)}
    </Slider>
  </>
   
  )
}
