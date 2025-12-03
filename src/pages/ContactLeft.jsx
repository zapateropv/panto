import React from 'react'
import { BsTelephoneOutbound } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TbBrandDiscord } from "react-icons/tb";
const ContactLeft = () => {
  return (
    <div className='bg-black text-white md:w-120 w-full md:h-150 h-100 p-10 flex flex-col justify-between
    md:rounded-tl-xl md:rounded-bl-xl rounded-none'>
      <div>
        <p className='text-3xl font-gilroy-bold'>Contact Information</p>
        <p className='font-gilroy-regular'>Say something to start a live chat!</p>
      </div>
      <div className='flex flex-col items-start justify-around'>
        <div className='flex items-center mb-5'>
            <BsTelephoneOutbound className='mr-5'/>
            <p>+123 456 789</p>
        </div>
         <div className='flex items-center mb-5'>
            <MdOutlineEmail className='mr-5'/>
            <p>panto@gmail.com</p>
        </div>
         <div className='flex items-start justify-between'>
            <IoLocationOutline className='text-2xl '/>
            <p className='text-sm ml-5'> Boston Street, Massachusetts 02156 United States</p>
        </div>
      </div>
      <div className='flex items-center '>
            <FaXTwitter className='mr-5'/>
            <FaInstagram className='mr-5'/>
            <TbBrandDiscord />
      </div>
    </div>
  )
}

export default ContactLeft
