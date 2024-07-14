import React, { useState } from "react";
import NavbarA from "./NavbarA";
import SideBar from "./SideBar";
import axios from "axios";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../UserContext";
import toast from "react-hot-toast";

const Add = () => {
  const history = useNavigate();
  const { userData } = useUserContext();
  const [images, setImages] = useState([]);

  const sellerID = userData ? userData._id : null;

  const handleProduct = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const productData = {
      sellerID: sellerID,
      productName: data.get("productName"),
      category: data.get("category"),
      originalPrice: data.get("originalPrice"),
      discountPrice: data.get("discountPrice"),
      description: data.get("description"),
      brand: data.get("brand"),
      quantity: data.get("quantity"),
    };
    const formData = new FormData();
    Object.keys(productData).forEach((key) => {
      formData.append(key, productData[key]);
    });

    images.forEach((image) => {
      formData.append("images", image);
    });
    try {
      const response = await axios.post(
        "https://fashion-collection-backend-rosy.vercel.app/api/auth/admin/products",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.status === 200) {
        history("#");
        toast.success("Product added Successfully.!!")
        window.location.reload();
        setImages([]);
        console.log("Product added successfully");
      } else {
        console.log("Failed to add product");
      }
    } catch (error) {
      console.log("An error occurred while adding products:", error);
    }
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    setImages(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <NavbarA />
      <SideBar />
      <div className="mt-20 mx-2">
        <div className="m-auto shadow-xl shadow-gray-300 max-w-2xl bg-slate-50">
          <h1 className="text-center font-serif font-bold text-red-600 border-b-2 py-2">
            Product Infromation
          </h1>
          <form className="mt-10 ml-5 mr-5 " onSubmit={handleProduct}>
            <div class="mb-4" onDrop={handleDrop} onDragOver={handleDragOver}>
              <label
                htmlFor="image"
                class="inline-block text-gray-700 font-bold cursor-pointer"
              >
                Product Image
              </label>
              <div className="flex flex-wrap gap-2 mt-2">
                {images.length > 0 ? (
                  images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Product ${index + 1}`}
                        className="w-24 h-24 object-cover"
                      />
                    </div>
                  ))
                ) : (
                  <label htmlFor="image" className="cursor-pointer">
                    {/* <img src={assets.upload_area} alt="" className="w-24 mt-2" /> */}
                  </label>
                )}
                {images.length < 10 && (
                  <label htmlFor="image" className="cursor-pointer">
                    <img src={assets.upload_area} alt="Add more images" className="w-24 mt-2" />
                  </label>
                )}
              </div>
              <input
                onChange={(e) =>
                  setImages([...images, ...Array.from(e.target.files)])
                }
                type="file"
                id="image"
                name="images"
                className="hidden w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                multiple
                required
              />
            </div>
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-bold mb-2">
                Product Name
              </label>
              <input
                name="productName"
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
                Product Original Price
              </label>
              <input
                type="number"
                name="originalPrice"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              />
            </div>
            <div class="mb-4">
              <label for="age" class="block text-gray-700 font-bold mb-2">
                Product Discounted Price
              </label>
              <input
                type="number"
                name="discountPrice"
                class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-500"
                required
              />
            </div>
            <div class="mb-4">
              <label for="text" class="block text-gray-700 font-bold mb-2">
                Product Description
              </label>
              <textarea
                type="text"
                name="description"
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
                name="brand"
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
                name="quantity"
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
