
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts, addProduct } from "../store/storeSlice";
import { CiCirclePlus } from "react-icons/ci";
import "react-toastify/dist/ReactToastify.css";
import SuccessIcon, { notify } from "./SuccessIcon";

const DisplayProduct = () => {
  const { items, category, loading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const filteredItems = items.filter((item) => item.category === category);


  return (
    <div className="flex justify-center gap-6 items-center mt-15 flex-wrap ">
      
      { filteredItems.map((item, index) => (
        <div key={index}>
          <div className="bg-[#FAFAFA] rounded-tr-2xl rounded-tl-2xl">
            <img
              src={item.image}
              className="w-[224px] h-[278px]"
              alt={item.title}
            />
          </div>

          <div className="bg-white p-5 flex flex-col justify-center items-start">
            <p className="text-[#8D8D8D]">{item.category}</p>
            <p className="text-[#0D1B39] font-gilroy-bold text-xl">
              {item.title}
            </p>
            <img src={item.rating} className="w-24" alt="rating" />
          </div>

          <div className="bg-white flex justify-between items-center p-5 rounded-bl-2xl rounded-br-2xl">
            <p className="text-[#0D1B39] font-gilroy-regular font-semibold text-xl">
              $ {item.price}
            </p>

            <CiCirclePlus
              className="text-4xl cursor-pointer hover:text-gray-500"
              onClick={() => {
                dispatch(addProduct(item));
                notify(); 
              }}
            />
          </div>
        </div>
      ))}

      <SuccessIcon /> 
    </div>
  );
};

export default DisplayProduct;
