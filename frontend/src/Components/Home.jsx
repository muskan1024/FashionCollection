import React from 'react'
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
        <Navbar/>
        <div className='grid '>
            <img src="/images/baner-1.png" alt="baner" className='w-[90%] rounded-lg lg:max-w-[70%] mt-5 justify-self-center' />
        </div>
    </>
  )
}

export default Home
