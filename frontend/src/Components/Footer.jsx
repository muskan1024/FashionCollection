import {
  LocalPhone,
  LocalPhoneOutlined,
  Mail,
  Place,
  WhatsApp,
} from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" grid grid-col grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-5 bg-slate-300 p-3 gap-3 sm:gap-8 ">
      <div className="">
        <Link to="/" className="flex gap-1 pb-2 items-center font-bold">
          <img src="/images/fc-logo.png" alt="" className="w-5 " />
          <span className=" text-red-600 ">FASHION </span>
          <span> COLLECTION</span>
        </Link>
        <p className="text-[11px] text-justify">
          <b>Fashion Collection</b> brings you with new and exciting products
          with great <b>Quality Fabric.</b> <br />
          Our collection includes a wide range of fabrics suited for every
          occasion, from formal wear to casual attire.
        </p>
      </div>
      <hr className="border-[1px] border-gray-400 block sm:hidden"/>
      <div>
        <h1 className="font-semibold mb-1">Contact Us:</h1>
        <div className="text-[14px] text-wrap">
          <ul className="pb-1">
            <LocalPhone sx={{ fontSize: 15 }} />{" "}
            <a
              href="tel:+918855023555"
              className="hover:text-blue-700 hover:font-semibold"
            >
              +918855023555
            </a>{" "}
            |{" "}
            <a
              href="tel:+919881987778"
              className="hover:text-blue-700 hover:font-semibold"
            >
              +919881987778
            </a>
          </ul>
          <ul className="pb-1">
            <Mail sx={{ fontSize: 15 }} />
            <a
              href="mailto:fashionmenswear81019@gmail.com"
              className="hover:text-blue-700 hover:font-semibold"
            >
              fashionmenswear81019@gmail.com
            </a>
          </ul>
          <ul>
            <WhatsApp sx={{ fontSize: 15 }} /> 
            <a
              href="https://api.whatsapp.com/send?phone=+918857831831"
              className="hover:text-blue-700 hover:font-semibold pb-1"
            >+918857831831</a>
          </ul>
        </div>
      </div>
      <hr className="border-[1px] border-gray-400 block sm:hidden"/>

      <div>
        <p className="font-semibold">Address:</p>
        <p className="underline text-blue-700 font-medium">
          <Place sx={{ fontSize: 17 }} />
          <a
            target="blank"
            href="https://www.google.com/maps/place/Fashion+Collection/@18.5856465,73.8226414,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9205926ae2f:0xcfd45151b76f0fd7!8m2!3d18.5856465!4d73.8226414!16s%2Fg%2F11h7zbvxj3?entry=ttu"
          >
            Sai Palace, opp. Ramakrishna Mangal Karyalaya Pimple Gurav,
            Pune-411061
          </a>
        </p>
      </div>
      <hr className="border-[1px] border-gray-400 block sm:hidden"/>

      <div className="grid gap-2">
        <Link to="/" className="hover:border-b-2 hover:border-red-500 w-fit">
          Home
        </Link>
        <Link to="/shop" className="hover:border-b-2 hover:border-red-500 w-fit">
          Shop
        </Link>
        <Link to="/about" className="hover:border-b-2 hover:border-red-500 w-fit">About Us</Link>
      </div>
    </div>
  );
};

export default Footer;
