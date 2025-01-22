import React, { useState } from 'react'
import style from './ForgetPassword.module.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function ForgetPassword() {
  
const [errorMessage, setErrorMessage] = useState(null)
const [success, setSuccess] = useState(false)
const [sentCode, setSentCode] = useState(false)
let navg=useNavigate()
// forget password api====================================
 async function ForgetPasswordApi(data){
  let req= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/forgotPasswords`,data)
  .then((req)=>{console.log(req.data);
    setSuccess(req.data.message)
    setTimeout(() => {
      setSentCode(true)
    }, 1000);
  })
  .catch((err)=>{console.log(err.response.data.message)
    setErrorMessage(err.response.data.message)
  }
  )
  console.log(req.data.response);
  
  }
// passcode api ==========================================
 async function PassCodeApi(data){
  let req= await axios.post(`https://ecommerce.routemisr.com/api/v1/auth/verifyResetCode`,data)
  .then((req)=>{console.log(req.data);
    setSuccess(req.data.message)
    setTimeout(() => {
      navg('/updatePassword')
    }, 1000);
  })
  .catch((err)=>{console.log(err.response.data.message)
    setErrorMessage(err.response.data.message)
  }
  )
  console.log(req.data.response);
  
  }
// validation for get passcode in forget password form
  let validYup=Yup.object({
    email:Yup.string().required('email is required').email('enter Valid Email'),
  })
  // vaildation in enter passcode in passcode form
  let validYup2=Yup.object({
    resetCode:Yup.string().required('resetCode is required')
  })
// formik for passcode form
  let PassCodeForm= useFormik({
      initialValues:{
        resetCode:'',
      },
      onSubmit:PassCodeApi,
      validationSchema:validYup2,
    })

// formik for forget password form
  let ForgetPasswordForm= useFormik({
      initialValues:{
        email:'',
      },
      onSubmit:ForgetPasswordApi,
      validationSchema:validYup,
    })


  return (
    <>
       

{sentCode ? <div className='my-4'>
  <h2 className='text-3xl text-center text-green-700 '>Forget Password</h2>
{errorMessage ? <div className="p-4 mb-2 mx-auto text-sm text-red-800 rounded-lg w-6/12 bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> {errorMessage}
</div>:''}
{success ? <div className="p-4 mb-2 mx-auto text-sm text-green-800 rounded-lg w-6/12 bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium">Congratulations</span> {success}
</div>:''}
<form className="w-7/12 mx-auto" onSubmit={PassCodeForm.handleSubmit}>
 
  <div className="mb-5">
    <label  htmlFor="resetCode" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">PassCode</label>
    <input value={PassCodeForm.values.resetCode} onChange={PassCodeForm.handleChange} onBlur={PassCodeForm.handleBlur} name='resetCode' type="string" id="resetCode" className="w-12/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"   />
    {PassCodeForm.touched.resetCode && PassCodeForm.errors.resetCode ? <p className='bg-blue-200 p-2 rounded mt-1'>{PassCodeForm.errors.resetCode}</p> :""}
  </div>
  <button disabled={!(PassCodeForm.isValid && PassCodeForm.dirty)} type="submit" className="text-white bg-active hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-active disabled:bg-opacity-25">Verify Code</button>
</form>
</div> :<div className='my-4'>
  <h2 className='text-3xl text-center text-green-700 '>Forget Password</h2>
{errorMessage ? <div className="p-4 mb-2 mx-auto text-sm text-red-800 rounded-lg w-6/12 bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <span className="font-medium">Danger alert!</span> {errorMessage}
</div>:''}
{success ? <div className="p-4 mb-2 mx-auto text-sm text-green-800 rounded-lg w-6/12 bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
  <span className="font-medium">Congratulations</span> {success}
</div>:''}
<form className="w-7/12 mx-auto" onSubmit={ForgetPasswordForm.handleSubmit}>
 
  <div className="mb-5">
    <label  htmlFor="email" className="block mb-2 text-sm  font-medium text-gray-900 dark:text-white">Your email</label>
    <input value={ForgetPasswordForm.values.email} onChange={ForgetPasswordForm.handleChange} onBlur={ForgetPasswordForm.handleBlur} name='email' type="email" id="email" className="w-12/12 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"   />
    {ForgetPasswordForm.touched.email && ForgetPasswordForm.errors.email ? <p className='bg-blue-200 p-2 rounded mt-1'>{ForgetPasswordForm.errors.email}</p> :""}
  </div>
  <button disabled={!(ForgetPasswordForm.isValid && ForgetPasswordForm.dirty)} type="submit" className="text-white bg-active hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 disabled:bg-active disabled:bg-opacity-25">Send Code</button>
</form>
</div>}

    </>
  )
}
