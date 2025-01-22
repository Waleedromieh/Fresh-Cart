import React, { useState } from 'react'
import style from './UpdatePassword.module.css'
import axios from 'axios'
import * as Yup from 'yup'
import { useFormik } from 'formik'
import { Link, useNavigate } from 'react-router-dom'

export default function UpdatePassword() {
  let navg=useNavigate()
  const [errorMessage, setErrorMessage] = useState(null)
  const [success, setSuccess] = useState(false)
  function ResetPassword(data){
   let req= axios.put('https://ecommerce.routemisr.com/api/v1/auth/resetPassword',data)
    .then((req)=>{console.log(req.data);
      if(req.data.token){
        navg('/login')
      }

    })
    .catch((err)=>{console.log(err);})
  }

  let validYup=Yup.object({
    email:Yup.string().required('email is required').email('enter Valid Email'),
    newPassword:Yup.string().required('password is required').matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/),
  })
  let UpdatePasswordForm=useFormik({
    initialValues:{
      email:'',
      newPassword:''
    },
    onSubmit:ResetPassword,
    validationSchema:validYup
  })
  return (
<>
<div className='my-4'>
  <h2 className='text-3xl text-center text-green-700 '>Update Password</h2>
{errorMessage ? <div className="p-4 mb-2 mx-auto text-sm text-red-800 rounded-lg w-6/12 bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> {errorMessage}
</div>:''}
{success ? <div className="p-4 mb-2 mx-auto text-sm text-green-800 rounded-lg w-6/12 bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium">Congratulations</span> Success
</div>:''}
<form className="w-7/12 mx-auto" onSubmit={UpdatePasswordForm.handleSubmit}>
 
  <div className="mb-5">
    <label  htmlFor="email" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Your email</label>
    <input value={UpdatePasswordForm.values.email} onChange={UpdatePasswordForm.handleChange} onBlur={UpdatePasswordForm.handleBlur} name='email' type="email" id="email" className="w-12/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"   />
    {UpdatePasswordForm.touched.email && UpdatePasswordForm.errors.email ? <p className='bg-blue-200 p-2 rounded mt-1'>{UpdatePasswordForm.errors.email}</p> :""}

  </div>
  <div className="mb-5">
    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
    <input value={UpdatePasswordForm.values.newPassword} onChange={UpdatePasswordForm.handleChange} onBlur={UpdatePasswordForm.handleBlur} name='newPassword' type="password" id="newPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-blue-500"  />
    {UpdatePasswordForm.touched.newPassword && UpdatePasswordForm.errors.newPassword ? <p className='bg-blue-200 p-2 rounded mt-1'>{UpdatePasswordForm.errors.newPassword}</p> :""}
  </div>
  <button disabled={!(UpdatePasswordForm.isValid && UpdatePasswordForm.dirty)} type="submit" className="text-white bg-active hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-active disabled:bg-opacity-25">Update Password</button>
</form>
</div>


</>
  )
}
