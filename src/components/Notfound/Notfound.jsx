import React from 'react'
import style from './Notfound.module.css'
import errorSvg from '../../assets/images/error.svg'
export default function Notfound() {
    
  return (<div className='flex justify-center items-center h-screen'>
    <img src={errorSvg} alt="" />
    </div>)
    
  
}
