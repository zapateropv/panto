import React from 'react'
import { text } from '../info'


const Us = () => {

 

  return (
    <>

      <div className="lg:mt-100 mt-80 flex flex-col items-center justify-center p-10 lg:flex-row lg:items-center lg:justify-between">
        <div className="m-10">
          <p className="text-3xl max-w-50 font-gilroy-bold">Why Choosing Us</p>
        </div>
        {text.map((info, index) => (
          <div
            key={index}
            className="flex flex-col items-start justify-center max-w-xs m-10"
          >
            <p className="mb-5 text-xl font-gilroy-bold">{info.title}</p>
            <p className="font-gilroy-regular">{info.info}</p>
            <p className="mt-5 text-orange-400 cursor-pointer">More info →</p>
          </div>
        ))}
      </div>

      

    </>

  )
}

export default Us
