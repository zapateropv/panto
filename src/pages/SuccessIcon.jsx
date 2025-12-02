
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notify = () => {
  toast.success('Items Added to Cart', {
position: "top-right",
autoClose: 1000,
hideProgressBar: true,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",

});
};

const SuccessIcon = () => {
  return <ToastContainer
position="top-right"
autoClose={1000}
limit={1}
hideProgressBar
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>;
};

export default SuccessIcon;
