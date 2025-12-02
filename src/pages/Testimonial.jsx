import React from 'react'
import { testimonial } from '../testimonial'



const Testimonial = () => {
    return (
        <>
        <div className='flex flex-col items-center justify-center'>
            <p className='text-[#E58411] font-gilroy-bold text-2xl mb-5 mt-5'>TESTIMONIALS</p>
            <p className='text-[#1E1E1E] font-gilroy-bold text-5xl mb-10 text-center'>Our Client Reviews</p>
         </div>   
            <div className='flex justify-around items-center flex-wrap gap-5 p-2'>
                {testimonial.map((item, index) => (
                    <div className='relative w-110 shadow-2xl ' key={index}>
                        <img src={item.bg} className='w-full object-cover h-auto'/>

                        <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white flex flex-col items-center justify-between
                       w-[85%] max-w-[380px]   rounded-2xl p-2'>
                            <img src={item.pfp} className='absolute -top-13 shadow-none bg-white rounded-full '/>
                            <p className='text-[#1E1E1E] text-xl font-gilroy-bold mt-2'>{item.name}</p>
                            <p className='font-gilroy-regular text-[#1E1E1E] mb-5 opacity-60 text-sm'>{item.location}</p>
                            <p className='text-center font-gilroy-regular text-[#1E1E1E] opacity-60  ' >{item.description}</p>
                            <img src={item.rating} className='mt-5'/>
                        </div>    
                    </div>   
                ))}
            </div>


           
        </>


    )
}

export default Testimonial
