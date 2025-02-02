import React from 'react'
import slide1 from '../../assets/images/slider-image-1.jpeg'
import slide2 from '../../assets/images/slider-image-2.jpeg'
import slide3 from '../../assets/images/slider-image-3.jpeg'
import grocery1 from '../../assets/images/grocery-banner-2.jpeg'
import grocery2 from '../../assets/images/grocery-banner.png'
import Slider from 'react-slick';
export default function MainSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (<>
    <div className='grid md:grid-cols-[2fr_1fr] sm:grid-cols-[1fr] '>
        <div className=' overflow-hidden '>
        <Slider {...settings} className='my-10'>
          <div className='h-full w-full'>    
                <img src={slide1} className='w-full h-[400px]' alt="" />
          </div>
          <div>    
          <img src={slide2} className='w-full h-[400px]' alt="" />
          </div>
          <div>    
          <img src={slide3} className='w-full h-[400px]' alt="" />
          </div>
    </Slider>
        </div>
        <div className=' my-16 h-full'>
         <img src={grocery1} className='w-full h-fit' alt="" />
         <img src={grocery2} className='w-full h-fit' alt="" />
        </div>
    </div>
  </>
  )
}
