import React from 'react'
import { materials } from '../materials'
import pic1 from '../assets/materials/pic1.png'
import pic2 from '../assets/materials/pic2.png'
import pic3 from '../assets/materials/pic3.png'

const Materials = () => {
  return (
    <>
  
    <div className='mt-50 flex justify-around items-center flex-wrap '>
        {materials.map((item, index) => (
            <div className='w-120 m-5 ' key={index}>
                <p className='text-md font-semibold text-[#E58411] mb-2'>MATERIALS</p>
                <p className='text-4xl  font-gilroy-bold mb-5'>{item.title}</p>
                <p className='text-md text-base/8 font-gilroy-regular text-[#1E1E1E]'>{item.info}</p>
            </div>
            
        ))}    
        <div className='grid grid-cols-2 m-5 w-3xl'>
            <div className=''>
                <img src={pic1} className='md:bg xs:bg-5xl'/>
                <img src={pic2}/>
            </div>
             <div>
                <img src={pic3}/>
            </div>
        </div> 
    </div>

      </>
  )
}

export default Materials
