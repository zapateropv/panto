import React from 'react'
import interior1 from '../assets/interior1.png'
import interior2 from '../assets/interior2.png'
import { design } from '../accordion'
import { download } from '../accordion'

const AboutIntro = () => {
  return (
    <div className=' flex justify-around items-center flex-wrap bg-[#FAFAFA] p-10'>
      {design.map((item) => (
        <div className='flex flex-col '>
          <p className='sm:text-8xl xs:text-6xl font-gilroy-medium mb-5 text-justify'>{item.title}</p>
          <p className='text-lg max-w-140 w-full text-justify font-gilroy-regular mb-5'>{item.about}</p>
          <button className='bg-[#1F1F1F] p-4 rounded-sm text-lg w-50 text-white
            cursor-pointer hover:bg-[#000000]'>Start Project</button>
          <div className='flex flex-row flex-wrap justify-between gap-6 '>
            {download.map((item) => (
              <div className='flex flex-col items-start md:mt-10 xs:mt-10'>
                <p className='font-gilroy-semibold text-5xl text-[#545454]'>{item.title}</p>
                <p className='text-[#545454] mt-3 text-lg'>{item.about}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
      <div className='md:mt-0 xs:mt-15'>
        <img src={interior1} className='  mb-5' />
        <img src={interior2} className=' h-auto mb-5 ' />
      </div>
    </div>
  )
}

export default AboutIntro
