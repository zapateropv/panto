import React from 'react'
import CartTotal from './CartTotal';
import CartItems from './CartItems';
import Footer from './Footer'
import CartNavbar from './CartNavbar';
import CheckoutModal from './CheckoutModal'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Dashboard = () => {

  const [toggle, setToggle] = useState(false)
  const {cartItems} = useSelector(state => state.products)
  const ModalToggle = () => {

    if(cartItems.length > 0)
    setToggle(!toggle)
    
  }
 
  return (
    <>
    <CartNavbar />
    <div className={`${toggle ? 'visible' : 'hidden'} fixed inset-0 top-20 flex items-center justify-center z-50`}>
      <div className="bg-white p-5 rounded-lg shadow-lg">
         <CheckoutModal toggle={toggle} setToggle={setToggle} ModalToggle={ModalToggle}/>
      </div>
   </div>

  
    <div className={`${toggle ?'blur-xs bg-black/20' : 'bg-white' } 
    p-10 flex justify-around flex-wrap-reverse min-h-screen items-end`}>
     <CartItems />
     <CartTotal toggle={toggle} ModalToggle={ModalToggle}/>
    </div>
    <div className={`${toggle ?'blur-xs bg-black/20' : 'bg-white' } `}>
        <Footer />
    </div>
   
    </>
    
  )
}

export default Dashboard
