import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout/Layout'
import Login from './components/Login/Login'
import Product from './components/Product/Product'
import Signup from './components/Signup/Signup'
import Home from './components/Home/Home'
import Notfound from './components/Notfound/Notfound'
import Cart from './components/Cart/Cart'
import Brands from './components/Brands/Brands'
import Category from './components/Category/Category'
import ForgetPassword from './components/ForgetPassword/ForgetPassword'
import UpdatePassword from './components/UpdatePassword/UpdatePassword'

function App() {
let router=createBrowserRouter([{path:'',element:<Layout/>,children:[
  {index:true,element:<Home/>},
  {path:'product',element:<Product/>},
  {path:'login',element:<Login/>},
  {path:'signup',element:<Signup/>},
  {path:'cart',element:<Cart/>},
  {path:'brands',element:<Brands/>},
  {path:'category',element:<Category/>},
  {path:'forgetPassword',element:<ForgetPassword/>},
  {path:'updatePassword',element:<UpdatePassword/>},
  {path:'*',element:<Notfound/>},
]}])
  return (<>
<RouterProvider router={router}></RouterProvider>
</>)
}

export default App
