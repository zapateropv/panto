import React from 'react'
import FooterLeft from './FooterLeft'
import FooterRight from './FooterRight'
import FooterBottom from './FooterBottom'

const Footer = () => {
  return (
    <div className='bg-[#FAFAFA]  '>
        <div className='flex justify-around items-center mt-40 p-10 flex-wrap'>
              <FooterLeft/>
              <FooterRight/>
        </div>
        <FooterBottom/>
    </div>
  )
}

export default Footer
