import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='bg-black h-screen flex flex-col items-center justify-center'>
      <p className='text-white  text-4xl font-bold'>Page not found ://</p>
      <Link className='text-white bg-green-800 rounded-lg mt-5 p-2 hover:bg-green-900' to={'/'}>Go home</Link>
    </div>
  )
}

export default NotFound
