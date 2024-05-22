import React from 'react'
import Navbar from './Navbar'
import { Mail, Phone, Place, WhatsApp } from '@mui/icons-material'
import Footer from './Footer'

const About = ({ setShowLogin }) => {
  return (
    <>
    <Navbar/>
    <br />
    <br />
    <br />
    <div className='mt-5 ml-5 mr-5'>
      <div className="text-center font-bold text-red-500 border-b-4 pb-3 ">
        <h1>About Us .</h1>
      </div>
      <div className="max-w-[90%] md:max-w-[70%] mx-auto mt-10 ">
        <img src="/images/About.jpg" alt="" />
      </div>
      <div className="text-center ">
        <h2 className='text-red-600 font-semibold'>Fashion Collection & Mens Wear</h2>
        <p>Fashion Mens Wear,Since 1992.</p>
      </div>
      <div className="mt-8 max-w-[90%] md:max-w-[70%] mx-auto text-gray-600 font-sans">
        <p>Welcome to <b>Fashioin Men's Wear % Collection,</b> your number one source for all types of clothing for mens from buying the fabric to getting it stich. we're dedicated to give you the very best of clothing,with a focus on fabrics, stiching them at a reasonable price. Fashion Mens wear tailoring shop and fashion Collection a Fabric Shop for Men';s. Badshah Lala Shaikh owner of Fashion Mens Wear. we are serving peoples by stiching their clothes at a high Quality Stiching of any style, Kind and every type of clothes as our customer want from last 20 years.We have a huge experience in this field. we have proffesional tailor's and teams working at our place. We stich clothes for each and every age group. We stich every types and styles of clothes as our customer want to. And now we have a New Shop named <b>Fashion Collecton.</b>.A shop of Branded fabrics and cloth pieces for men. we have all kinds of material like shirting,suiting,trousers,T-Shirt,Uniform 3 Pice Suit etc. We have all types of Fabrics (Branded & non-Branded) fabrics too. We hope you enjoy ou products as much as we enjoy offering them to you!! If you have any questions or queries please don't hesitate , feel free to contact us or Mail or Message. THANK YOU !! .</p>
      </div>
      <div className="mt-20 text-center font-bold border-b-4 pb-3">
        <h1>Contact Us</h1>
      </div>

      <div className=" grid max-w-[90%] md:max-w-[80%] mx-auto  grid-rows-1  sm:grid-cols-2 md:grid-cols-3  p-3 gap-9 sm:gap-8 text-center justify-between  ">
        <div className="">
            <h1 className='font-bold' >Shop</h1>
        <Place sx={{ fontSize: 17 }} />
          <a
            target="blank"
            href="https://www.google.com/maps/place/Fashion+Collection/@18.5856465,73.8226414,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9205926ae2f:0xcfd45151b76f0fd7!8m2!3d18.5856465!4d73.8226414!16s%2Fg%2F11h7zbvxj3?entry=ttu"
          >
            Sai Palace, opp. Ramakrishna Mangal Karyalaya Pimple Gurav,
            Pune-411061
          </a>
      </div>
      <div className="">
        <h1 className='font-bold' >Phone</h1>
        <Phone sx={{ fontSize: 15 }} /> 
            <a
              href="https://api.whatsapp.com/send?phone=+918857831831"
              className="hover:text-blue-700 hover:font-semibold pb-1"
            >+918857831831</a>
      </div>
      <div className="">
        <h1 className='font-bold' >E-mail</h1>
        <Mail sx={{ fontSize: 15 }} />
            <a
              href="mailto:fashionmenswear81019@gmail.com"
              className="hover:text-blue-700 hover:font-semibold"
            >
              fashionmenswear81019@gmail.com
            </a>
      </div>
      
      </div>
      <div className="max-w-[90%] md:max-w-[70%] mx-auto mt-10">
        <img src="/images/map.jpg" alt="" />
      </div>
    </div>
    <br /><br /><br />
    <Footer setShowLogin={setShowLogin}/>
    </>
  )
}

export default About
