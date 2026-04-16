import React, { useRef } from 'react'
import 'remixicon/fonts/remixicon.css'

import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(useGSAP, ScrollTrigger)

const HeroSection = () => {
    let leftRef = useRef()
    let rightRef = useRef()
    let sectRef = useRef()
     
    useGSAP(()=>{
    
     const tl = gsap.timeline({
         scrollTrigger: {
      trigger: sectRef .current,
      start: "top 85%",
      toggleActions: "play reverse play reverse"
    }
     })
      
    tl.from(leftRef.current.querySelectorAll('h3'), {
    x: 50,
    opacity: 0,
    duration: 0.5
  })
  .from(leftRef.current.querySelectorAll('h1'), {
    y: 30,
    opacity: 0,
    duration: 0.6
  })
  .from(leftRef.current.querySelectorAll('p'), {
    x: 60,
    opacity: 0,
    duration: 0.6
  })
  .from(leftRef.current.querySelectorAll('button'), {
    scale: 0.8,
    opacity: 0,
    duration: 0.5
  })
  .to(leftRef.current.querySelectorAll('button'), {
  backgroundColor: "#fb933c",   // your orange
  color: "white",             // white text
  duration: 0.5
})

  // ICONS
  .from(leftRef.current.querySelectorAll('.icon > div'), {
    opacity: 0,
    y: 50,
    stagger: 0.15,
    duration: 0.4
  })
  .from(rightRef.current.querySelectorAll('.topleft'), {
    x: -80,
    opacity: 0,
    scale: 0.85,
    duration: 0.8,
    stagger: 0.25,
    ease: "power3.out"
  })
  .from(rightRef.current.querySelectorAll('.topright'), {
    x: 80,
    opacity: 0,
    scale: 0.85,
    duration: 0.8,
    stagger: 0.25,
    ease: "power3.out"
  })
  .from(rightRef.current.querySelectorAll('.bottomleft'), {
    y: 80,
    opacity: 0,
    scale: 0.85,
    duration: 0.8,
    stagger: 0.25,
    ease: "power3.out"
  })
  .from(rightRef.current.querySelectorAll('.bottomright'), {
    y: 80,
    opacity: 0,
    scale: 0.85,
    duration: 0.8,
    stagger: 0.25,
    ease: "power3.out"
  })
    },{ scope: sectRef  })

    return (
        <div className='w-full  bg-white border-2 border-transparent rounded-xl py-7 px-4'>
            <div ref={sectRef} className='lg:flex'>
                <div ref={leftRef} className='px-3 lg:px-10 lg:bg-white bg-gray-100 rounded-xl lg:pb-0.5 pb-8 '>
                    <h3 className='text-orange-400 lg:text-2xl text-xl py-1.5 font-bold'>SErvices</h3>
                    <h1 className='text-xl lg:text-5xl font-bold mb-5 ml-5 '>Train Your Dog
                        <br />
                        from<span className='px-5 text-orange-300 py-10'>PawLearn</span> </h1>
                    <p className='max-w-xs lg:max-w-md ml-5 mb-10'>Train your dog effectively from home
                        with expert-guided lessons, real-time feedback, and simple step-by-step
                        techniques designed for everyday pet owners</p>
                    <button className='bg-orange-100 text-black text-2xl px-3 py-3 rounded-2xl ml-5 '> Start Yee Free Trail</button>


                    <div  className="icon flex gap-4  mt-10 ml-10 ">

                        {[
                            "ri-mental-health-line",
                            "ri-video-line",
                            "ri-smartphone-line",
                            "ri-focus-3-line"
                        ].map((icon, i) => (
                            <div key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <i className={`${icon} text-3xl text-gray-700`}></i>
                            </div>
                        ))}

                    </div>
                </div>
                <div ref={rightRef} className="grid grid-cols-2 gap-6 lg:ml-55 lg:py-5 py-10  w-full justify-center">
                    <div className="topleft w-2/2 lg:w-72 h-40 lg:h-60 rounded-2xl  bg-[url('/img/b.avif')] bg-cover bg-center flex items-end px-8 lg:px-12 py-2 ">
                        <button className='lg:px-10 px-3 lg:py-5 py-2 rounded-2xl bg-white/20 backdrop-blur-md text-white'>Instructor</button>
                    </div>
                    <div className="topright lg:w-72 h-44 lg:h-60 bg-orange-400 rounded-2xl px-4 py-4 flex flex-col justify-between">

                        <div>
                            <h1 className="mb-2 text-white font-bold text-lg  ">
                              <span >  <i className="ri-user-smile-line  text-2xl"></i></span>
                                 Interactive Stories
                            </h1>

                            <p className="text-white/90 text-sm leading-snug line-clamp-1 sm:line-clamp-none lg:mt-10 ">
                                “Promote content, engage your audience, and streamline creation workflow.”
                            </p>
                        </div>

                        <div  className="flex  items-center gap-3">
                            <button className="px-3 py-2 bg-white/20 backdrop-blur-md text-white text-sm rounded-full">
                                Smart
                            </button>

                            <button className="px-3 py-2 bg-white/20 backdrop-blur-md text-white text-sm rounded-full">
                                10%
                            </button>
                        </div>

                    </div>

                    <div className=" bottomleft lg:w-72 h-44 lg:h-60 border-2 border-gray-200 rounded-2xl px-4 py-4 flex flex-col justify-between">

                        <div>
                            <h1 className="mb-2 text-black font-bold text-lg  ">
                              <i className="ri-bar-chart-box-line"></i>
                                 Interactive <span className='text-orange-400'>services</span>
                            </h1>

                            <p className="text-gray-400 text-sm leading-snug line-clamp-1 sm:line-clamp-none lg:mt-10 ">
                                Automate tasks, guide the user, and enhance productivity with engaging workflows
                            </p>
                        </div>

                        <div className="flex  items-center gap-3">
                            <button className="px-3 py-2 border-2 border-gray-100 text-orange-400 text-sm rounded-full">
                               Explore Now 
                            </button>

                            <button className="px-3 py-2  border-2 border-gray-100 text-orange-400 text-sm rounded-full">
                                12%
                            </button>
                        </div>

                    </div>
                    
                    <div className=" bottomright lg:w-72 h-40 rounded-2xl lg:h-60 bg-[url('/img/t.avif')] bg-cover bg-center flex items-end px-8 lg:px-12 py-2">

                        <button className='lg:px-10 px-3 lg:py-5 py-2 rounded-2xl bg-white/10 backdrop-blur-md text-white'>See Progress</button>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection