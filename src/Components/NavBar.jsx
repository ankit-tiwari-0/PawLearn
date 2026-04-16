import React, { useRef } from 'react'
import gsap from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)


const NavBar = () => {

  let navRef = useRef()
  useGSAP(() => {
  const tl = gsap.timeline({
     scrollTrigger: {
      trigger: navRef.current,
      start: "top top",   // when navbar hits top
      toggleActions: "play reverse play reverse"
    }
  })
  

  tl.from(navRef.current, {
    y: -50,
    opacity: 0,
    duration: 0.5
  })
  .from(navRef.current.querySelector("h1"), {
    opacity: 0,
    x: -20
  })
  .from(navRef.current.querySelectorAll("ul "), {
    opacity: 0,
    y: -20,
    stagger: 0.2
  })
  .from(navRef.current.querySelector("button"), {
    opacity: 0,
    scale: 0.8
  })
}),{ scope:navRef}
    return (
    <div ref={navRef} className=" w-full flex justify-center  lg:p-1 p-3 ">
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