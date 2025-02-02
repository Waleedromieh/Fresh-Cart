import React, { useContext, useState } from 'react'
import style from './Signup.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../../Context/AuthContextProvider';

export default function Signup() {
let {setToken}=useContext(authContext)

const [loading, setloading] = useState(false)
const [errorMessage, setErrorMessage] = useState(null)
const [success, setSuccess] = useState(false)
let navg=useNavigate()

 async function RegisterApi(data){
  setloading(true)
  let req= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signup`,data).then((req)=>{if(req.data.message == 'success'){
    setSuccess(true)
      setTimeout(() => {
        navg('/login')
      }, 1000);
      setloading(false)
      localStorage.setItem('token',req.data.token)  
      setToken(req.data.token)    
  }}).catch((err)=>{console.log(err.response.data.message)
    setErrorMessage(err.response.data.message)
    setloading(false)
  }
  ).finally(()=>setloading(false))
  }
  let validYup=Yup.object({
    name:Yup.string().required('name is required').min(3,'minimum number of chars is 3').max(12,'maximum number of chars is 12'),
    email:Yup.string().required('email is required').email('enter Valid Email'),
    password:Yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,'ekteb sa7'),
    rePassword:Yup.string().required('please write the password').oneOf([Yup.ref('password')],'password didnt match'),
    phone:Yup.string().required('enter your phone').matches(/^(20)?01[1250][0-9]{8}$/,'enter valid phone number'),
  })
    // let initialValues=
  let registerForm= useFormik({
      initialValues:{
        name:'',
        password:'',
        rePassword:'',
        email:'',
        phone:''
      },
      onSubmit:RegisterApi,
      validationSchema:validYup,
      
    })
  return (<>
   
<div className='my-4 h-4/5 flex justify-center align-middle flex-col'>
  <h2 className='text-3xl text-center text-green-700 '>Register Now!</h2>
{errorMessage ? <div className="p-4 mb-2 mx-auto text-sm text-red-800 rounded-lg w-6/12 bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">{errorMessage}</span> 
</div>:''}
{success ? <div className="p-4 mb-2 mx-auto text-sm text-green-800 rounded-lg w-6/12 bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium">Congratulations</span> Success
</div>:''}
<form className="w-7/12 mx-auto" onSubmit={registerForm.handleSubmit}>
  <div className="mb-5">
    <label  htmlFor="name" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Your name</label>
    <input  value={registerForm.values.name} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} name='name' type="name" id="name" className="w-12/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"   />
    {registerForm.touched.name && registerForm.errors.name ? <p className='bg-blue-200 p-2 rounded mt-1'>{registerForm.errors.name}</p> :""}
  </div>
  <div className="mb-5">
    <label  htmlFor="email" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Your email</label>
    <input value={registerForm.values.email} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} name='email' type="email" id="email" className="w-12/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"   />
    {registerForm.touched.email && registerForm.errors.email ? <p className='bg-blue-200 p-2 rounded mt-1'>{registerForm.errors.email}</p> :""}

  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input value={registerForm.values.password} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} name='password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"  />
    {registerForm.touched.password && registerForm.errors.password ? <p className='bg-blue-200 p-2 rounded mt-1'>{registerForm.errors.password}</p> :""}
  </div>
  <div className="mb-5">
    <label htmlFor="rePassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">rePassword</label>
    <input value={registerForm.values.rePassword} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} name='rePassword' type="password" id="rePassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"  />
    {registerForm.touched.rePassword && registerForm.errors.rePassword ? <p className='bg-blue-200 p-2 rounded mt-1'>{registerForm.errors.rePassword}</p> :""}

  </div>
  <div className="mb-5">
    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">phone</label>
    <input value={registerForm.values.phone} onChange={registerForm.handleChange} onBlur={registerForm.handleBlur} name='phone' type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"  />
    {registerForm.touched.phone && registerForm.errors.phone ? <p className='bg-blue-200 p-2 rounded mt-1 '>{registerForm.errors.phone}</p> :""}

  </div>
  <button disabled={!(registerForm.isValid && registerForm.dirty)} type="submit" className="text-white bg-active hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-active disabled:bg-opacity-25"> {loading ? <i className="fa-solid fa-spinner fa-spin"></i>:'Register'}    </button>
</form>
</div>
    </>)
}
