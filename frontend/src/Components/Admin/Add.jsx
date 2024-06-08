import React, { useState } from "react";
import NavbarA from "./NavbarA";
import SideBar from "./SideBar";
// import {assets} from '../../assets'

const Add = () => {
  return (
    <>
      <NavbarA />
      <SideBar />
      <div className="mt-20 mx-2">
      <div className="m-auto shadow-xl shadow-gray-300 max-w-2xl bg-slate-50">
        <h1 className="text-center font-serif font-bold text-red-600 border-b-2 py-2">
          Product Infromation
        </h1>
        <form className="mt-10 ml-5 mr-5 ">
          <div class="mb-4">
            <label for="name" class="block text-gray-700 font-bold mb-2">
              Product Name
            </label>
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>

          <div class="mb-4">
            <label for="age" class="block text-gray-700 font-bold mb-2">
              Product Category
            </label>
            <select
              name="category"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
            >
              <option value="All">All</option>
              <option value="Suiting">Suiting</option>
              <option value="Shirting">Shirting</option>
              <option value="Uniform">Uniform</option>
              <option value="Trouser">Trouser</option>
              <option value="T-Shirt">T-Shirt</option>
              <option value="Coat">Coat</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="age" class="block text-gray-700 font-bold mb-2">
              Product Price
            </label>
            <input
              type="number"
              name="price"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="text" class="block text-gray-700 font-bold mb-2">
              Product Description
            </label>
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="text" class="block text-gray-700 font-bold mb-2">
              Brand Name
            </label>
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="text" class="block text-gray-700 font-bold mb-2">
              Quantity
            </label>
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="text" class="block text-gray-700 font-bold mb-2">
              Product Image
            </label>
            <input
              type="text"
              class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
              required
            />
          </div>
          <div class="mb-4 grid justify-items-stretch">
            <button
              type=" submit"
              class="w-3/5  bg-indigo-500 mb-4 text-white font-bold py-2 px-4 rounded-md justify-self-center hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      </div>
    </>
  );
};

export default Add;
