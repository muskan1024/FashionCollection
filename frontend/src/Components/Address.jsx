import { Grid, TextField } from "@mui/material";
import React from "react";

export const AddAddress = () => {
  return (
    <>
      <div className="grid justify-items-center h-screen content-center ">
        <form className="grid  m-3 gap-5 w-[90%] sm:w-[80%] lg:w-[60%]">
          <h1 className="text-xl  font-russo text-black font-medium text-center border-b-2 py-4 mt-7">
            Enter Your Address Details -
          </h1>
          <div className="m-5 p-2 space-x-3 space-y-3 ">
            <TextField label="Flat, House no., Building" name="house" style={{marginTop:"12px", marginLeft:"12px"}} required/>
            <TextField label="Area, Street, Village" name="street" required />
            <TextField label="Landmark" name="landmark" required />
            <TextField label="City" name="city" required />
            <TextField label="Pincode" name="postalCode" required />
            <TextField label="State" name="state" required />
            <TextField label="Country" name="country" required />
          </div>

          <button
            type="submit"
            className="font-semibold bg-slate-700 hover:bg-black p-2 rounded-md shadow-sm hover:shadow-md hover:shadow-gray-400 shadow-gray-600 text-white w-50"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};
