import React from 'react'
import style from './Footer.module.css'
import amazonSvg from '../../assets/images/amazon-pay-svgrepo-com.svg'
import americanSvg from '../../assets/images/american-express-svgrepo-com.svg'
import masterCardSvg from '../../assets/images/mastercard-full-svgrepo-com.svg'
import paypalSvg from '../../assets/images/paypal-3-svgrepo-com.svg'
import appStoreSvg from '../../assets/images/app-store-svgrepo-com.svg'
import googlePlaySvg from '../../assets/images/google-play-icon-svgrepo-com.svg'
export default function Footer() {
  return (<>
    <div className='p-10  bg-gray-100'>
      <h2 className='text-2xl my-1 font-serif'>Get the FreshCart app</h2>
      <p className='text-gray-500 my-2'>we will sent you a link, open it on your phone to download the app</p>
      <span className='flex flex-wrap gap-2'>
        <input type="text" className='lg:w-3/4  w-full rounded p-2 ' placeholder='Email ..'/>
        <button className='bg-active lg:w-fit md:w-full text-white px-10 py-1 rounded'>Share App Link</button>
      </span>


      <div className='grid md:grid-cols-2 my-3 p-3 border-t border-b'>
        <div className='flex justify-center md:justify-start  my-1  align-middle items-center'>
        <p className='me-1'>Payment Partners</p>
        <img src={amazonSvg} className='w-9 mx-1' alt="" />
        <img src={americanSvg} className='w-9 mx-1' alt="" />
        <img src={masterCardSvg} className='w-9 mx-1' alt="" />
        <img src={paypalSvg} className='w-9 mx-1' alt="" />
        </div>
        <div className='flex justify-center md:justify-end md:w-full my-1' >
          <p>Get deliveries with FreshCart</p>
          <img src={appStoreSvg} className='w-9  mx-1' alt="" />
          <img src={googlePlaySvg} className='w-9 mx-1' alt="" />
        </div>
      </div>
    </div>
  
  </>

  )
}
