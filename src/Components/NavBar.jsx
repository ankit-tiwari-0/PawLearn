import React from 'react'

const NavBar = () => {
  return (
    <div className="w-full flex justify-center  lg:p-1 p-3 ">
      <div className="bg-white px-6 lg:py-3 py-2 rounded-full lg:w-[95%] w-[90%] max-w-4xl  shadow-gray-500">
        <div className="flex  justify-between items-center  text-l">
          <h1 className='font-bold'>Paw<span className='text-orange-400'>Learn</span></h1>

          <ul className="hidden sm:flex gap-8  ">
            <li className='cursor-pointer border-b-3 border-transparent hover:border-gray-400 transition duration-300 ease-in-out'>Services</li>
            <li className='cursor-pointer border-b-2 border-transparent hover:border-gray-400 transition duration-300 ease-in-out'>Customers</li>
            <li className='cursor-pointer border-b-2 border-transparent hover:border-gray-400 transition duration-300 ease-in-out'>Pricing</li>
            <li className='cursor-pointer border-b-2 border-transparent hover:border-gray-400 transition duration-300 ease-in-out'>Support</li>
          </ul>

          <button className='bg-orange-400 text-sm text-white border-2 rounded-full px-2 py-1.5 border-none hover:bg-black cursor-pointer'>Free Trial</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar