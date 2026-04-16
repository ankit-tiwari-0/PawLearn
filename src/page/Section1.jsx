import React, { useRef } from 'react'
import NavBar from '../Components/NavBar'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const home = () => {
  const sectioRef = useRef()

  useGSAP(()=>{
    
  })
  return (
    <div className="relative w-full  h-112.5 lg:h-162.5  overflow-hidden">
     
      <img
        src="/img/p.jpg"
        className="absolute inset-0 w-full h-full object-cover lg:hidden"
      />

      <img
        src="/img/x.jpg"
        className="absolute inset-0 w-full h-full object-cover hidden lg:block"
      />

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="relative z-10">
        <NavBar />

        <div className="px-4 py-5 lg:ml-10 mt-3 lg:mt-20">
          <h1 className="text-white text-4xl lg:text-6xl font-bold max-w-md leading-[1.1] ">
            Train Your Dog
            <br /> Online With,
             <br/> PawLearn
          </h1>
        </div>
        
      </div>

    </div>
  )
}

export default home