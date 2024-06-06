import { Cancel } from "@mui/icons-material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "./login.css";
import axios from "axios";
import { useUserContext } from "./UserContext";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Login");
  const [errorMessage, setErrorMessage] = useState("");
  const [successmsg, setSuccessmsg] = useState("");
  const history = useNavigate();
  const {setUserData} = useUserContext();

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formData = {
      email: data.get("email"),
      password: data.get("password"),
      fullName: currState === "Sign Up" ? data.get("fullName") : "",
      contactNumber: currState === "Sign Up" ? data.get("contactNumber") : "",
    };

    try {
      const apiUrl =
        currState === "Login"
          ? "http://localhost:3002/api/auth/user/login" 
          : "http://localhost:3002/api/auth/user/signup";

      const response = await axios.post(apiUrl, formData);
      if (response.status === 200) {
        console.log(`${currState} successful`);
        setUserData(response.data)
        // console.log(response.data);
        if (currState === "Sign Up") {
          setCurrState("Login");
          setSuccessmsg("Signup successful! Please log in.");
        } else {
          setShowLogin(false);
          // setIsLoggedIn(true);
          // sessionStorage.setItem("isLoggedIn", true);
          history("/");
        }
      } else {
        console.error(`${currState} failed`);
        setErrorMessage(`${currState} failed. Please check your credentials.`);
      }
    } catch (error) {
      console.error("An error occurred:", error);
      if (error.response && error.response.data) {
        setErrorMessage(error.response.data);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className="login-popup">
      <form className="login-popup-container" onSubmit={handleFormSubmit}>
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <Cancel onClick={() => setShowLogin(false)} />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <>
              <input
                type="text"
                name="fullName"
                placeholder="Your Full Name"
                required
              />
              <input
                type="number"
                name="contactNumber"
                placeholder="Your Contact Number"
                required
              />
            </>
          )}
          <input
            type="email"
            name="email"
            placeholder="Your E-Mail ID"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Your Password"
            required
          />
        </div>
        <button>{currState === "Sign Up" ? "Create account" : "Login"}</button>
        {successmsg && (<p className="text-green-700 font-bold">{successmsg}</p>)}
        {errorMessage && (
          <p className="text-red-600 font-bold">{errorMessage}</p>
        )}
        <p>
          {currState === "Login" ? (
            <>
              Don't have an account?{" "}
              <span onClick={() => setCurrState("Sign Up")}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrState("Login")}>Login here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;