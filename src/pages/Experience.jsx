import React from 'react'
import { items } from '../experience'
import rectangle from '../assets/rectangle.png'

const Experience = () => {
  return (
    <div className='flex justify-around items-center gap-20 xs:gap-1 mt-20  flex-wrap-reverse '>
      <div className='m-5 shadow-2xl '>
        <img src={rectangle} className=' '/>
      </div>
      <div className=' w-120 m-10 '>
        {items.map((item, index) => (
            <div key={index}>
                <p className='text-md font-semibold text-[#E58411] mb-2'>EXPERIENCES</p>
                <p className='text-4xl  font-gilroy-bold mb-5'>{item.title}</p>
                <p className='text-md text-base/8 font-gilroy-regular text-[#1E1E1E]'>{item.about}</p>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
