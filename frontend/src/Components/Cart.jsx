import React, { useState } from 'react'
import { AccountCircle, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";
import Navbar from './Navbar';
import Login from './Login';
import Footer from './Footer';

const Cart = () => {
    const [showLogin,setShowLogin]=useState(false)

  return (
    <>
        {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}

    <Navbar setShowLogin={setShowLogin}/>
    <br />
    <br />
    <br />
    <div className='mt-5 ml-9 mr-7' >
        <div className=' flex-col flex justify-center  shadow-xl h-52 items-center  '>
            <h1 className='font-mono text-xl text-red-500 '>Your Shopping Cart is empty!!</h1>              
            <Link to='/shop'><button className=' shadow-xl mt-2 border-2 p-2 rounded-xl transition-all bg hover:text-sm hover:border-grey hover:bg-red-100'>Continue Shopping.</button></Link>
            
        </div>
      
    </div>
    
    </>
  )
}

export default Cart
