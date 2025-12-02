import React from 'react'
import { IoBagOutline } from "react-icons/io5"
import banner from '../assets/home.png'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
import { navbar } from '../navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AboutNavbar = () => {

     const [toggle, setToggle] = useState(false)
    const {cartItems} = useSelector(state => state.products) 
    const CartItems = cartItems.reduce((a ,b) => a + b.quantity, 0)
   
    const toggleNavbar = () => {

        setToggle(!toggle)

    }
  return (
    <div className=" w-full  ">
            <div className="w-full flex justify-between items-center p-5  text-white bg-black">
                <div className='flex  items-center gap-5'>
                    <p><GiHamburgerMenu className='md:invisible  text-xl xs:visible' a
                        onClick={() => toggleNavbar()} /></p>
                    <p className="text-4xl font-semibold cursor-pointer">Panto</p>

                </div>

                <div className="hidden md:flex items-center gap-10">
                    {navbar.map((item, index) => (
                        <p className='cursor-pointer text-lg border-transparent border-b-2 hover:border-y-amber-200'
                        key={index}>{item}</p>
                    ))}
                </div>

                <div className='relative'>
                    <Link to={'/dashboard'}>
                        <IoBagOutline className="text-2xl cursor-pointer" />
                    </Link>
                    <div className='absolute bg-orange-400 text-center w-[25px] h-[25px] rounded-full
                    left-4 bottom-3'>
                        <span>{CartItems}</span>        
                    </div>
                </div>
                <div
                    className={`
        absolute top-15 left-5 
        bg-white text-black p-3 text-sm rounded-lg
        transition-all duration-300 ease-in-out
        ${toggle ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}
  `}
                >
                    {navbar.map((item) => (
                        <p key={item} className="cursor-pointer mb-2">{item}</p>
                    ))}
                </div>

            </div>

        </div>
  )
}

export default AboutNavbar
