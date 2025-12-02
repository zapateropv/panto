import React from 'react'

const FooterBottom = () => {


  
  return (
    <div className='flex justify-around items-center flex-wrap p-10'>
      <div >
        <p className='text-[#1E2833] opacity-50  '>Copyright © {new Date().getFullYear()}</p>
      </div>
      <div className='flex  gap-5'>
        <p className='text-[#1E1E1E] opacity-80'>Terms & Conditions</p>
        <p className='text-[#1E1E1E] opacity-80'>Privacy Policy</p>
      </div>
    </div>
  )
}

export default FooterBottom
