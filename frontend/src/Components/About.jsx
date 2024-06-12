import React, { useState } from "react";
import Navbar from "./Navbar";
import shop from "./shop.css";
import { Mail, Phone, Place, WhatsApp } from "@mui/icons-material";
import Footer from "./Footer";
import Login from "./Login";

const About = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <></>}
      <Navbar setShowLogin={setShowLogin} />
      <br />
      <br />
      <br />
      <div className="">
        <div className=" relative flex max-w-[90%] md:max-w-[70%] mx-auto">
          <img src="/images/About.jpg" alt="" className="" />
          <h3 className="absolute w-[100%] top-[80%] bg-white translate-y-[-50%] py-[0.5rem] md:py-[1rem] text-center font-extrabold text-[20px] md:text-[2rem] mix-blend-screen ">
            Best Tailor & Fabrics Seller
          </h3>
        </div>
        <div className="text-center mt-2 ">
          <h2 className="text-red-600 font-semibold text-2xl">
            Fashion Collection & Mens Wear
          </h2>
          <p>Fashion Mens Wear,Since 1992.</p>
        </div>
        <div className="mt-8 max-w-[90%] md:max-w-[70%] mx-auto text-gray-600 font-sans">
          <p>
            Welcome to <b>Fashioin Collection & Men's Wear </b> your number one
            source for all types of clothing for mens from buying the fabric to
            getting it stich. we're dedicated to give you the very best of
            clothing,with a focus on fabrics, stiching them at a reasonable
            price. Fashion Mens wear tailoring shop and fashion Collection a
            Fabric Shop for Men';s. Badshah Lala Shaikh owner of Fashion Mens
            Wear. we are serving peoples by stiching their clothes at a high
            Quality Stiching of any style, Kind and every type of clothes as our
            customer want from last 20 years.We have a huge experience in this
            field. we have proffesional tailor's and teams working at our place.
            We stich clothes for each and every age group. We stich every types
            and styles of clothes as our customer want to. And now we have a New
            Shop named <b>Fashion Collecton.</b>.A shop of Branded fabrics and
            cloth pieces for men. we have all kinds of material like
            shirting,suiting,trousers,T-Shirt,Uniform 3 Pice Suit etc. We have
            all types of Fabrics (Branded & non-Branded) fabrics too. We hope
            you enjoy ou products as much as we enjoy offering them to you!! If
            you have any questions or queries please don't hesitate , feel free
            to contact us or Mail or Message. THANK YOU !! .
          </p>
        </div>
        <div className="mt-20 text-center font-bold text-3xl pb-3">
          <h1>Contact Us</h1>
        </div>

        <div className=" grid max-w-[90%] md:max-w-[80%] mx-auto sm:grid-cols-2 md:grid-cols-3  p-3 gap-9 sm:gap-8 text-center justify-between  ">
          <div className="">
            <h1 className="font-bold">Shop</h1>
            <Place sx={{ fontSize: 17 }} />{" "}
            <a
              className="hover:text-blue-700"
              target="blank"
              href="https://www.google.com/maps/place/Fashion+Collection/@18.5856465,73.8226414,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9205926ae2f:0xcfd45151b76f0fd7!8m2!3d18.5856465!4d73.8226414!16s%2Fg%2F11h7zbvxj3?entry=ttu"
            >
              Sai Palace, opp. Ramakrishna Mangal Karyalaya Pimple Gurav,
              Pune-411061
            </a>
          </div>
          <div className="">
            <h1 className="font-bold">Phone</h1>
            <Phone sx={{ fontSize: 15 }} />{" "}
            <a
              href="https://api.whatsapp.com/send?phone=+918857831831"
              className="hover:text-blue-700 pb-1"
            >
              +918857831831
            </a>{" "}
            |
            <a
              href="https://api.whatsapp.com/send?phone=+919881987778"
              className="hover:text-blue-700 pb-1"
            >
              {" "}
              +919881987778
            </a>
          </div>
          <div className="">
            <h1 className="font-bold">Message Us on</h1>
            <div className="">
              <Mail sx={{ fontSize: 15 }} />{" "}
              <a
                href="mailto:fashionmenswear81019@gmail.com"
                className="hover:text-blue-700 "
              >
                fashionmenswear81019@gmail.com
              </a>
              <br />
              <WhatsApp sx={{ fontSize: 15 }} />{" "}
              <a
                href="https://api.whatsapp.com/send?phone=+918857831831"
                className="hover:text-blue-700  pb-1"
              >
                +918857831831
              </a>
            </div>
          </div>
        </div>
        <div className="max-w-[90%] md:max-w-[70%] mx-auto mt-10">
          <a
            target="blank"
            href="https://www.google.com/maps/place/Fashion+Collection/@18.5856465,73.8226414,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9205926ae2f:0xcfd45151b76f0fd7!8m2!3d18.5856465!4d73.8226414!16s%2Fg%2F11h7zbvxj3?entry=ttu"
          >
            <img src="/images/map.jpg" alt="" />
          </a>
        </div>
      </div>
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default About;
