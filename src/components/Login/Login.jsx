import React, { useState } from 'react'
import style from './Login.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
 
const [loading, setloading] = useState(false)
const [errorMessage, setErrorMessage] = useState(null)
const [success, setSuccess] = useState(false)
let navg=useNavigate()

 async function LoginApi(data){
  setloading(true)
  let req= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/signin`,data).then((req)=>{if(req.data.message == 'success'){
    setSuccess(true)
      setTimeout(() => {
        navg('/')
      }, 1000);
  }
  setloading(false)
}).catch((err)=>{console.log(err.response.data.message)
    setErrorMessage(err.response.data.message)
    setloading(false)
  }
  ).finally(()=>setloading(false))  
  }
  let validYup=Yup.object({
    email:Yup.string().required('email is required').email('enter Valid Email'),
    password:Yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/),
  })
    let initialValues={
      password:'',
      email:'',
    }
  let loginForm= useFormik({
      initialValues,
      onSubmit:LoginApi,
      validationSchema:validYup,
    })
  return (<>
   
<div className='my-4'>
  <h2 className='text-3xl text-center text-green-700 '>Login</h2>
{errorMessage ? <div className="p-4 mb-2 mx-auto text-sm text-red-800 rounded-lg w-6/12 bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> {errorMessage}
</div>:''}
{success ? <div className="p-4 mb-2 mx-auto text-sm text-green-800 rounded-lg w-6/12 bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium">Congratulations</span> Success
</div>:''}
<form className="w-7/12 mx-auto" onSubmit={loginForm.handleSubmit}>
 
  <div className="mb-5">
    <label  htmlFor="email" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Your email</label>
    <input value={loginForm.values.email} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} name='email' type="email" id="email" className="w-12/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"   />
    {loginForm.touched.email && loginForm.errors.email ? <p className='bg-blue-200 p-2 rounded mt-1'>{loginForm.errors.email}</p> :""}

  </div>
  <div className="mb-5">
    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input value={loginForm.values.password} onChange={loginForm.handleChange} onBlur={loginForm.handleBlur} name='password' type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"  />
    {loginForm.touched.password && loginForm.errors.password ? <p className='bg-blue-200 p-2 rounded mt-1'>{loginForm.errors.password}</p> :""}
  </div>
  <Link to={'/forgetPassword'} className='block my-2'>Forget Password..?</Link>
  <button disabled={!(loginForm.isValid && loginForm.dirty)} type="submit" className="text-white bg-active hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-active disabled:bg-opacity-25">{loading ? <i className="fa-solid fa-spinner fa-spin"></i> :'Login'}</button>
</form>
</div>



    </>)
    
}
