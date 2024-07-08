import { LocalPhone, Mail, Place, WhatsApp } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="p-10 grid grid-col grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-5 bg-gray-800 text-white gap-3 sm:gap-8 ">
      <div className="pb-3">
        <Link to="/" className="flex gap-1 pb-2 items-center font-bold">
          <img
            src="/images/fc-logo.png"
            alt=""
            className="w-12 bg-white px-2 p-1 rounded-full "
          />
          <span className=" text-red-600 ">FASHION </span>
          <span> COLLECTION</span>
        </Link>
        <p className="text-sm text-justify">
          <b>Fashion Collection</b> brings you with new and exciting products
          with great <b>Quality Fabric.</b> <br />
          Our collection includes a wide range of fabrics suited for every
          occasion, from formal wear to casual attire.
        </p>
      </div>
      <div className="pb-3 grid gap-3">
        <div>
          <h1 className="font-semibold mb-1">Contact Us:</h1>
          <div className="text-[14px] text-wrap pl-6">
            <ul className="pb-1">
              <LocalPhone sx={{ fontSize: 15 }} />{" "}
              <a href="tel:+918855023555" className="hover:text-cyan-500">
                +918855023555
              </a>{" "}
              |{" "}
              <a href="tel:+919881987778" className="hover:text-cyan-500 ">
                +919881987778
              </a>
            </ul>
            <ul className="pb-1">
              <Mail sx={{ fontSize: 15 }} />{" "}
              <a
                href="mailto:fashionmenswear81019@gmail.com"
                className="hover:text-cyan-500 "
              >
                fashionmenswear81019@gmail.com
              </a>
            </ul>
            <ul>
              <WhatsApp sx={{ fontSize: 15 }} />{" "}
              <a
                target="_blank"
                href="https://wa.me/918857831831"
                className="hover:text-cyan-500 pb-1"
              >
                +918857831831
              </a>
            </ul>
          </div>
        </div>
        <Link
          to="/about"
          className="font-semibold hover:border-b-2 text-white hover:border-red-500 w-fit"
        >
          About Us
        </Link>
      </div>

      <div className="pb-3">
        <p className="font-semibold">
          Address:
          <p className="underline text-cyan-500 font-medium">
            <Place sx={{ fontSize: 17 }} />
            <a
              target="blank"
              href="https://www.google.com/maps/place/Fashion+Collection/@18.5856465,73.8226414,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2b9205926ae2f:0xcfd45151b76f0fd7!8m2!3d18.5856465!4d73.8226414!16s%2Fg%2F11h7zbvxj3?entry=ttu"
            >
              Sai Palace, opp. Ramakrishna Mangal Karyalaya Pimple Gurav,
              Pune-411061
            </a>
          </p>
        </p>
      </div>
      {/* <hr className="border-[1px] border-gray-400 block sm:hidden"/> */}

      {/* <div className="grid gap-2">
        <Link to="/" className="hover:border-b-2 hover:border-red-500 w-fit">
          Home
        </Link>
        <Link to="/shop" className="hover:border-b-2 hover:border-red-500 w-fit">
          Shop
        </Link>
        <Link to="/about" className="hover:border-b-2 hover:border-red-500 w-fit">About Us</Link>
      </div> */}
    </div>
  );
};

export default Footer;
