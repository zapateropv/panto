import React from 'react'
import { useSelector } from 'react-redux'


const CartHeader = () => {

    const {cartItems} = useSelector(state => state.products)

  return (
    <div>
      <p className='text-3xl font-gilroy-bold'>Shopping Cart</p>
      <p className='text-lg font-gilroy-regular mt-2'>You have {cartItems.length > 0 ? cartItems.length : 0} item in your cart</p>
    </div>
  )
}

export default CartHeader
