import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { FaRegTrashAlt } from "react-icons/fa";
import { increaseQuantity, decreaseQuantity, deleteItem } from '../store/storeSlice';
import CartHeader from './CartHeader';

const CartItems = () => {
  const {cartItems} = useSelector(state => state.products)
  const Dispatch = useDispatch()

  console.log(cartItems)

  return (
    <div className='flex flex-col gap-5 w-150 '>
     <CartHeader/>
      {cartItems.length > 0 ?  cartItems.map((item, index) => (
        <div className='flex  items-center justify-between w-full  flex-shrink shadow-[0_4px_20px_rgba(0,0,0,0.2)]
         p-3 rounded-2xl ' key={index}>
          <div className='flex items-center gap-5 '>
            <img src={item.image} className='sm:w-25 sm:h-25 bg-orange-300 rounded-2xl
            xs:w-15 xs:h-15'/>
            <div>
              <p className='sm:text-lg xs:text-sm text-[#0D1B39] font-gilroy-bold '>{item.title}</p>
              <p className='text-md text-[#8D8D8D]'>{item.category}</p>
            </div>       
          </div>
          <div className='flex items-center gap-2  mr-3'>
            <span className='sm:text-lg xs:text-xs text-[#0D1B39] '>
              {item.quantity}
            </span>
            <span className='flex flex-col items-center '>
               <TiArrowSortedUp className='sm:text-lg xs:text-xs cursor-pointer'
               onClick={()=> Dispatch(increaseQuantity(item.id))}/>
               <TiArrowSortedDown className='sm:text-lg xs:text-xs cursor-pointer '
               onClick={()=> Dispatch(decreaseQuantity(item.id))} />
            </span>
           
          </div>
          <div className='flex items-center sm:gap-5 xs:gap-2'>
            <p className='sm:text-lg xs:text-sm'>${item.price * item.quantity}.0</p>
            <FaRegTrashAlt className='sm:text-lg xs:text-xs cursor-pointer hover:text-red-500'
            onClick={()=> Dispatch(deleteItem(item.id))} />
          </div>
          
        </div>
      )) : <p className='text-xl'>cart is empty ://</p>}

      
    </div>
  )
}

export default CartItems
