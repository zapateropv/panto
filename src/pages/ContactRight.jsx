import React from 'react'

const ContactRight = () => {
  return (
    <div className='md:w-150 w-full h-150 bg-white  md:rounded-br-xl md:rounded-tr-xl rounded-none '>
      <form className='p-5' onSubmit={(e) => e.preventDefault()}>
        <div className='md:flex '> 
        <div className='flex flex-col md:w-full  m-5 '>
            <label className='font-gilroy-bold'>First Name</label>
            <input placeholder='John' className='border-b-[#8D8D8D] border-b outline-none mt-2'/>
        </div>
         <div className='flex flex-col md:w-full m-5'>
            <label className='font-gilroy-bold'>Last Name</label>
            <input placeholder='Doe' className='border-b-[#8D8D8D] border-b outline-none mt-2'/>
        </div>
         </div>
         <div className='md:flex'> 
         <div className='flex flex-col md:w-full m-5'>
            <label className='font-gilroy-bold'>Email</label>
            <input placeholder='panto@gmail.com' className='border-b-[#8D8D8D] border-b outline-none mt-2'/>
        </div>
         <div className='flex flex-col md:w-full m-5'>
            <label className='font-gilroy-bold'>Phone Number</label>
            <input placeholder='+123123' className='border-b-[#8D8D8D] border-b outline-none mt-2'/>
        </div>
         </div>
         <div>
         </div>
          <span className='flex flex-col m-5'>
            <label className='font-gilroy-bold'>Message</label>
            <input placeholder='Write your message'
            className='border-b-[#8D8D8D] border-b outline-none mt-2'/>
         </span>
         <button className='m-5 bg-black hover:bg-gray-900 text-white p-3 w-50 rounded-sm
         cursor-pointer'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactRight
