import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <>
      <div className="shadow-md hover:shadow-lg cursor-pointer rounded-sm ">
        <Link to={`/shop/products/${product._id}`}>
          <img src={product.image} className="object-cover h-40 mx-auto" />
          <div className="p-2">
            <h1 className="text-center font-bold text-red-500">
              {product.brand}
            </h1>
            <h1 className="px-3 text-center sm:text-base text-sm">
              {product.productName}
            </h1>
            {/* whitespace-nowrap overflow-hidden overflow-ellipsis */}
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
