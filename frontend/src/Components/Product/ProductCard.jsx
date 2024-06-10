import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductCard = ({ product }) => {
//   const [products, setProducts] = useState(products1 || []);
    // useEffect(() => {
    //   const fetchProducts = async () => {
    //     try {
    //       const response = await axios.get("http://localhost:3002/api/products");
    //       setProducts(response.data);
    //       console.log(setProducts);
    //     } catch (error) {
    //       console.log("Error: ", error);
    //     }
    //   };
    //   fetchProducts();
    // }, []);
//   useEffect(() => {
//     const fetchProducts = async () => {
//       if (!products1) {
//         try {
//           const response = await axios.get(
//             "http://localhost:3002/api/products"
//           );
//           setProducts(response.data);
//         } catch (error) {
//           console.log("Error: ", error);
//         }
//       }
//     };
//     fetchProducts();
//   }, [products1]);
  return (
    <>
    {/* // <div className="grid gap-5 justify-items-center lg:grid-cols-4 md:grid-cols-3 grid-cols-2"> */}
      {/* {products.map((product) => (
        <> */}
          <div className="shadow-md hover:shadow-lg cursor-pointer rounded-sm sm:max-w-56">
            <img src={product.image} className="object-cover h-40 mx-auto" />
            <div className="p-2">
              <h1 className="text-center font-bold text-red-500">
                {product.brand}
              </h1>
              <h1 className="px-3 text-center sm:text-base text-sm">{product.productName}</h1>
              {/* whitespace-nowrap overflow-hidden overflow-ellipsis */}
              <h1 className="font-semibold text-lg text-center">
                Rs. {product.discountPrice}{" "}
                <span className="pl-1 font-normal line-through text-gray-500">
                  {" "}
                  MRP Rs. {product.originalPrice}
                </span>
              </h1>
            </div>
          </div>
        {/* </>
      ))} */}
    {/* </div> */}
    </>
  );
};

export default ProductCard;
