import React from 'react'
import { accordion } from '../accordion'
import furniture1 from '../assets/furniture1.png'
import { useState } from 'react'

const AboutTop = () => {

    const[toggle, setToggle] = useState(null)
    
        const ToggleAccordion = (id) =>{
            
            setToggle(id == toggle ? null : id)
            
        }
  return (
   <div className='flex items-center justify-center gap-20 flex-wrap mt-50 p-10 '>
            <div className=''>
                <img src={furniture1} className='w-130 h-130 '/>
            </div>
            
                <div className='flex flex-col items-start justify-between h-130 '>
                    <p className='text-4xl max-w-100 font-gilroy-bold mb-5'>Designing Your Dream With Brilliance</p>
                    <p className='text-lg max-w-130'>Elevate your spaces with bespoke interior designs that reflect your unique style and aspirations, crafted with precision and brilliance for an unforgettable living experience</p>

                  {accordion.map((item, index) => (
                     <div className='   md:w-120 xs:w-full
                    p-2' key={index}>
                        <div className='flex justify-between items-center'>
                             <p className='font-gilroy-bold  text-lg'>{item.title}</p>
                             <p className='text-2xl cursor-pointer'
                            onClick={()=> ToggleAccordion(item.id)}>{toggle == item.id ? "-" : "+"}</p>
                        </div>
                        <hr className='mt-2 text-gray-500'/>
                       <p  className={`
                        overflow-hidden transition-all duration-300 text-justify
                        ${toggle == item.id ? "max-h-40 mt-4" : "max-h-0"}
                        `}>
                            {item.about}
                       </p>
                       
                    </div>
                  ))}
                     
                    
                </div>
            
       </div>
  )
}

export default AboutTop
