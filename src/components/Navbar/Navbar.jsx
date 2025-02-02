import React, { useContext } from 'react'
import style from './Navbar.module.css'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/freshcart-logo.svg'
import { authContext } from '../../Context/AuthContextProvider'
export default function Navbar() {
let {token,setToken}=useContext(authContext)
let navg=useNavigate();
function logOut(){
  navg('/login')
  setToken(null)
  localStorage.removeItem('token')
}
  return (<>
  
<nav className="bg-white border-gray-200 fixed top-0 left-0 right-0 z-20  shadow">
        <div className="max-w-screen-xl flex flex-wrap justify-between  items-center  mx-auto p-4">
          <Link to="" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="Logo" />
          </Link>
          <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
          <div className="hidden items-center md:gap-72 justify-between w-full md:flex md:w-auto" id="navbar-default">
            {token?<ul className=" font-medium flex flex-col gap-5 p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
              <NavLink to="/" className={(x) => x.isActive ? 'block py-2 text-active' : 'block py-2 '} aria-current="page">Home</NavLink>
              </li>
              <li>
              <NavLink to="product" className={(x) => x.isActive ? 'block py-2 text-active' : 'block py-2 '} aria-current="page">products</NavLink>
              </li>
              <li>
              <NavLink to="cart" className={(x) => x.isActive ? 'block py-2 text-active' : 'block py-2 '} aria-current="page">cart</NavLink>
              </li>
              <li>
              <NavLink to="brands" className={(x) => x.isActive ? 'block py-2 text-active' : 'block py-2 '} aria-current="page">brands</NavLink>
              </li>
              <li>
              <NavLink to="category" className={(x) => x.isActive ? 'block py-2 text-active' : 'block py-2 '} aria-current="page">category</NavLink>
              </li>
            </ul>:''}
            {token?  <ul className="font-medium flex  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 px-3" aria-current="page"><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" aria-current="page"><i className="fa-brands fa-facebook"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" aria-current="page"><i className="fa-brands fa-tiktok"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" ><i className="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" ><i className="fa-brands fa-linkedin"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" ><i className="fa-brands fa-youtube"></i></a>
              </li>
              <button className='text-active hover:bg-active hover:text-white p-2 rounded transition-all' onClick={logOut}>logout  </button>
            </ul>  : <ul className="font-medium flex  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row  rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
              <li>
                <a href="#" className="block py-2 px-3" aria-current="page"><i className="fa-brands fa-instagram"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" aria-current="page"><i className="fa-brands fa-facebook"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" aria-current="page"><i className="fa-brands fa-tiktok"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" ><i className="fa-brands fa-twitter"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" ><i className="fa-brands fa-linkedin"></i></a>
              </li>
              <li>
                <a href="#" className="block py-2 px-3" ><i className="fa-brands fa-youtube"></i></a>
              </li>
              <li>
                <NavLink to="/login" className={(x) => x.isActive ? 'block py-2 mx-3 text-active' : 'block py-2 '} aria-current="page">Login</NavLink>
              </li>
              <li>
                <NavLink to="/signup" className={(x) => x.isActive ? 'block py-2 mx-3 text-active' : 'block py-2 '} aria-current="page">Signin</NavLink>
              </li>
            </ul> }
          </div>
        </div>
      </nav>

  </>)


}
