import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const firstImage = product.image[0];
  return (
    <>
      <div className="shadow-md hover:shadow-lg cursor-pointer rounded-sm bg-white w-full ">
        <Link to={`/shop/products/${product._id}`}>
          <img src={firstImage} alt="Product Image" className="object-cover h-40 mx-auto" />
          <div className="p-2">
            <h1 className="text-center font-bold text-red-500">
              {product.brand}
            </h1>
            <h1 className="px-3 text-center sm:text-base text-sm">
              {product.productName}
            </h1>
            <h1 className="font-semibold text-lg text-center">
              Rs. {product.discountPrice}{" "}
              <span className="pl-1 font-normal line-through text-gray-500">
                {" "}
                MRP Rs. {product.originalPrice}
              </span>
            </h1>
          </div>
        </Link>
      </div>
    </>
  );
};

export default ProductCard;
