import React from 'react'
import './Admin.css'
import Sidebar from '../../Components/Sidebar/Sidebar'
import {Routes, Route} from "react-router-dom"
import AddProduct from '../../Components/AddProduct/AddProduct'
import ListProducts from '../../Components/ListProduct/ListProduct'
import UsersData from '../../Components/UsersData/UsersData'
import Orders from '../../Components/Orders/Orders'

const Admin = () => {
  
  return (
    <div className='admin'>
        <Sidebar/>
        <Routes>
            <Route exact path='/addproduct' element={<AddProduct/>}/>
            <Route exact path='/listproduct' element={<ListProducts/>}/>
            <Route exact path='/users' element={<UsersData/>}/>
            <Route exact path='/orders' element={<Orders/>}/>
        </Routes>
    </div>
  )
}

export default Admin
