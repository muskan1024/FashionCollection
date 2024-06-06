import React, { useState } from 'react'
import { AccountCircle, Menu, Search, ShoppingCart } from "@mui/icons-material";
import { Link, NavLink } from "react-router-dom";

const Cart = () => {

  return (
    <>
    <div className='mt-20 mx-9' >
        <div className=' flex-col flex justify-center rounded-xl shadow-lg h-52 items-center bg-gray-100 '>
            <h1 className='font-mono text-xl text-red-500 '>Your Shopping Cart is empty!!</h1>              
            <Link to='/shop'><button className=' shadow-xl mt-2 border-2 p-2 rounded-xl transition-all bg hover:text-sm hover:border-grey hover:bg-red-100'>Continue Shopping.</button></Link>
            
        </div>
      
    </div>
    
    </>
  )
}

export default Cart
