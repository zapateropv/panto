import React from 'react'
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const FooterRight = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 mt-10 md:mt-0">
            
            
            <div>
                <p className="font-semibold text-[#F6973F] mb-5">Services</p>
                <p className="font-gilroy-medium mb-5 text-[#1E1E1E]">Email Marketing</p>
                <p className="font-gilroy-medium mb-5 text-[#1E1E1E]">Campaigns</p>
                <p className="font-gilroy-medium  text-[#1E1E1E]">Branding</p>
            </div>

            
            <div>
                <p className="font-semibold text-[#F6973F] mb-5">Furniture</p>
                <p className="font-gilroy-medium mb-5 text-[#1E1E1E]">Beds</p>
                <p className="font-gilroy-medium mb-5 text-[#1E1E1E]">Chairs</p>
                <p className="font-gilroy-medium text-[#1E1E1E]">All</p>
            </div>

            
            <div>
                <p className="font-semibold text-[#F6973F] mb-5">Follow Us</p>

                <div className="flex items-center gap-2 mb-5">
                    <FaFacebookF className="text-black" />
                    <span className='font-gilroy-medium text-[#1E1E1E]'>Facebook</span>
                </div>

                <div className="flex items-center gap-2 mb-5">
                    <FaTwitter className="text-black" />
                    <span className='font-gilroy-medium text-[#1E1E1E]'>Twitter</span>
                </div>

                <div className="flex items-center gap-2 ">
                    <FaInstagram className="text-black" />
                    <span className='font-gilroy-medium text-[#1E1E1E]'>Instagram</span>
                </div>
            </div>

        </div>
    )
}

export default FooterRight
