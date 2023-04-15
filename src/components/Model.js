import React from 'react'
import { FiChevronDown } from 'react-icons/fi'

const Model = () => {
    return (
        <div>
            <div className='absolute inset-x-8 top-[15%] text-center'>
                <h1 className='text-4xl font-bold'>Model Y</h1>
                <p className='pt-1 font-light'><a href='https://www.tesla.com/inventory/new/my'><span className='text-sm underline underline-offset-4'>View Inventory</span></a></p>
            </div>
            <div className='flex flex-col items-center justify-center text-sm lg:flex-row absolute inset-x-0 bottom-[10%]'>
                <button className='bg-[#393c41] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2 text-white'><a href='https://www.tesla.com/modely/design#overview'>Order Now</a></button>
                <button className='bg-[#f4f4f4] rounded-md w-96 lg:w-64 lg:mx-4 h-10 mt-2'><a href='https://www.tesla.com/drive'>Demo Drive</a></button>
            </div>
            <div className='flex justify-center animate-bounce absolute inset-x-0 bottom-[3%]'>
                <FiChevronDown size={24}/>
            </div>
        </div>
    )
}

export default Model;