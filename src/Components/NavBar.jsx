import React from 'react'

const NavBar = () => {
  return (
    <div className="w-full flex justify-center  lg:p-1 p-5 ">
      <div className="bg-white px-6 py-3 rounded-full lg:w-[95%] w-[90%] max-w-4xl  shadow-gray-500">
        <div className="flex justify-between items-center">
          <h1>PawLearn</h1>

          <ul className="hidden sm:flex gap-4">
            <li>Services</li>
            <li>Customers</li>
            <li>Pricing</li>
            <li>Support</li>
          </ul>

          <button>Free Trial</button>
        </div>
      </div>
    </div>
  )
}

export default NavBar