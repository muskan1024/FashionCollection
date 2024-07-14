import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";

const LoginA = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();
  const {setUserData} = useUserContext();

  const handleLogin = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get("email"),
      password: data.get("password"),
    };
    try {
      const response = await axios.post(
        "https://fashion-collection-backend-rosy.vercel.app/api/auth/user/login",
        formData
      );
      if (response.status === 200) {
        setUserData(response.data)
        history("/admin/home");
        console.log("Admin Login Succesfully ");
      } else {
        console.error("Login failed");
      }
    } catch (error) {
      console.error("An error occured while logging in:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("Login Failed. Email or Password is incorrect!!");
      }
    }
  };
  return (
    <>
      <div className="w-full h-screen bg-gray-200 p-5">
        <form onSubmit={handleLogin} className="max-w-sm m-auto mt-[25%] lg:mt-[12%] p-7 bg-white rounded-md shadow-xl">
          <span className="text-lg font-semibold">Admin Login!!</span>
          <div className="grid gap-5 p-5">
            <input
              type="email"
              name="email"
              placeholder="Your E-Mail ID"
              required
              className="border-[1px] border-black outline-none p-2 rounded-[4px]"
            />
            <input
              type="password"
              name="password"
              placeholder="Your Password"
              required
              className="border-[1px] border-black outline-none p-2 rounded-[4px]"
            />
            {errorMessage && (<p className="text-red-600 font-bold">{errorMessage}</p>)}
            <button className="mt-3 w-full p-2 rounded-[4px] justify-self-center bg-[#ff0000] text-white font-semibold hover:shadow-md hover:shadow-gray-400">
              LOGIN
            </button>
          </div>
        </form> 
      </div>
    </>
  );
};

export default LoginA;
