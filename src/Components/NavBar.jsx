import React from 'react'

const NavBar = () => {
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="bg-white px-6 py-3 rounded-full w-[95%] max-w-4xl shadow-md">
        <div className="flex justify-between items-center">
          <h1>PawLearn</h1>

          <ul className="hidden sm:flex gap-4">
            <li>Features</li>
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

export default NavBar   // ✅ VERY IMPORTANT