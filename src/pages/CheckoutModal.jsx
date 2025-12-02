import React from 'react'
import { useMemo, useState } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";
import { IoMdClose } from "react-icons/io";

const CheckoutModal = ({toggle, setToggle, ModalToggle}) => {

     const [value, setValue] = useState("");
     const options = useMemo(() => countryList().getData(), []);

  return (
    <div className='max-w-200 '>
      <div className='flex  justify-between items-center mb-10'>
        <p className='text-2xl font-gilroy-bold '>Delivery Information</p>
        <IoMdClose className='cursor-pointer text-red-900' 
        onClick={()=>ModalToggle(setToggle(!toggle))}/>
      </div>
      <form className='' onSubmit={(e) => e.preventDefault()}>
        <div className='flex items-center mb-5 gap-5'>
            <input placeholder='First Name' className='checkout-modal ' required/>
            <input placeholder='Last Name' className='checkout-modal' required/>
        </div>
        <div className='mb-5'>
             <input placeholder='Email Address' className='checkout-modal' type='email' required/>
        </div>
        <div className='mb-5'>
             <input placeholder='Street' className='checkout-modal' required/>
        </div>
         <div className='flex items-center mb-5 gap-5'>
            <input placeholder='City' className='checkout-modal' required/>
            <input placeholder='State'   className='checkout-modal' required/>
        </div>
         <div className='flex items-center mb-5 gap-5'>
            <input placeholder='Zipcode' className='checkout-modal' required/>
             <Select
            options={options}
            value={value}
            onChange={setValue}
            placeholder="Select country"
            className='w-full p-1 rounded-sm outline-none'
            required
            />
        </div>
        <div className=' mb-5'>
             <input placeholder='Phone' className='checkout-modal 'required/>
        </div>
        <div>
        
            <textarea className='checkout-modal h-40' placeholder='Additional Info'>
            
            </textarea>
        </div>
        <div>
            <button className='text-white bg-orange-400 p-2 mt-5 cursor-pointer hover:bg-orange-500
            w-full' type='submit'>
                PROCEED TO PAYMENT
            </button>
        </div>
      </form>
      
    </div>
  )
}

export default CheckoutModal
