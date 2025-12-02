import React from 'react'
import { useSelector } from 'react-redux'



const CartTotal = ({ ModalToggle}) => {

     
    const {cartItems} = useSelector(state => state.products)
    const fee = 2;
    const total = cartItems.map((item) => item.quantity * item.price)
    const computedTotal = total.reduce((a, b) => a + b, 0)
    
    const prints = () => {
      if(cartItems.length <= 0)
        alert("cart is empty")
     
    }
    
    
  return (
    <div className='flex flex-col  w-150  p-5 '>
      <div>
        <h1 className='text-2xl text-[#0D1B39] font-gilroy-bold mb-5'>Cart Totals</h1>
      </div>
      <div className='flex justify-between items-center mb-2 text-lg'>
        <p className=''>Subtotal</p>
        <p >${computedTotal}.0</p>
      </div>
      <span>
        <hr className=''/>
      </span>
      <div className='flex justify-between  items-center mt-2 mb-2 text-lg'>
        <p>Delivery fee</p>
        <p className=''>${fee}.0</p>
      </div>
      <span>
        <hr />
      </span>
      <div className='flex justify-between  items-center text-lg mt-2'>
        <p>Total</p>
        <p>${computedTotal + fee}.0</p>
      </div>
      <button className='text-white bg-orange-400 p-2 mt-5 cursor-pointer hover:bg-orange-500'
       onClick={()=> {ModalToggle(), prints()} }>
        PROCEED TO CHECKOUT
      </button>
      
     
    </div>
  )
}

export default CartTotal
