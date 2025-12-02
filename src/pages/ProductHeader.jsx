import React from 'react'
import { buttons } from '../buttons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory } from '../store/storeSlice'

const ProductHeader = () => {


    const [active, setActive] = useState(null)
    const dispatch = useDispatch()
    const {category, loading} = useSelector(state => state.products)
    

    const toggleClick = ((name) => {
    
        setActive(name)
        dispatch(setCategory(name))
    }) 

   
    return (
        <div className="flex flex-col items-center justify-center m-auto text-center">
            <p className="font-gilroy-bold text-5xl mb-6 mt-20">Best Selling Product</p>
            <div className="flex gap-5 bg-[#EEEEEE] p-2 rounded-full text-lg">
                {buttons.map((item, index) => (
                    <button className={`cursor-pointer px-3 py-2 text-[#1E1E1E]  rounded-full ${active == item.title ? 'bg-white  ' : "bg-transparent"}`} 
                    onClick={(e)=> toggleClick(e.target.name)} key={index}
                    name={item.title} >
                        {item.title}
                    </button>
                ))}
            </div>
        </div>

    )
}

export default ProductHeader
