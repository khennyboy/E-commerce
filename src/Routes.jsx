import React from 'react'
import { Navigate,
     Route, 
     RouterProvider, 
     createBrowserRouter, 
     createRoutesFromElements } from 'react-router-dom'
import Nav from './components/Nav'
import Main from './components/Main'

const router = createBrowserRouter
(createRoutesFromElements(
    <Route path='/' element={<Nav/>}>
        <Route index element = {<Navigate replace to = 'shoes'/>}/>
        <Route path='shoes' element={<Main/>}/>
    </Route>
))
const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes