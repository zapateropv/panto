import React from 'react'
import { IoBagOutline } from "react-icons/io5"
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const CartNavbar = () => {

    const {cartItems} = useSelector(state => state.products)


  return (
    <div className='flex items-center justify-around bg-black text-white p-5 relative'>
      <div className=''>
            <Link className='flex items-center cursor-pointer ' to={'/'}>
                <MdKeyboardArrowLeft className='text-3xl'/>
                <p className='md:text-lg xs:text-md'>Continue Shopping</p>
            </Link>
      </div>
      <div className='relative'>
        <IoBagOutline className="text-2xl cursor-pointer" />
         <div className=' bg-orange-400 text-center w-[20px] h-[20px] rounded-full
                    left-4 bottom-2 absolute'>
                       {cartItems.length}     
          </div>
      </div>
    </div>
  )
}

export default CartNavbar
