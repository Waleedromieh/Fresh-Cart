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
import AuthContextProvider from './Context/AuthContextProvider'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
let client =new QueryClient()
function App() {
let router=createBrowserRouter([{path:'',element:<Layout/>,children:[
  {index:true,element:<ProtectedRoute><Home/></ProtectedRoute>},
  {path:'product',element:<ProtectedRoute><Product/></ProtectedRoute> },
  {path:'login',element:<Login/> },
  {path:'signup',element:<Signup/>},
  {path:'cart',element:<ProtectedRoute><Cart/></ProtectedRoute>},
  {path:'brands',element:<ProtectedRoute><Brands/></ProtectedRoute>},
  {path:'category',element:<ProtectedRoute><Category/></ProtectedRoute>},
  {path:'productDetails/:id/:category',element:<ProtectedRoute><ProductDetails/></ProtectedRoute>},
  {path:'forgetPassword',element:<ForgetPassword/>},
  {path:'updatePassword',element:<UpdatePassword/>},
  {path:'*',element:<Notfound/>},
]}])
  return (<>
  <QueryClientProvider client={client}>
  <AuthContextProvider>
  <RouterProvider router={router}></RouterProvider>
  </AuthContextProvider>
  </QueryClientProvider>

</>)
}

export default App
