import React from 'react'
import 'remixicon/fonts/remixicon.css'

const HeroSection = () => {
    return (
        <div className='w-full  bg-white border-2 border-transparent rounded-xl py-7 px-4'>
            <div className='lg:flex'>
                <div className='px-3 lg:px-10 lg:bg-white bg-gray-100 rounded-xl '>
                    <h3 className='text-orange-400 lg:text-2xl text-xl py-1.5 font-bold'>SErvices</h3>
                    <h1 className='text-xl lg:text-5xl font-bold mb-5 ml-5 '>Train Your Dog
                        <br />
                        from<span className='px-5 text-orange-300 py-10'>PawLearn</span> </h1>
                    <p className='max-w-xs lg:max-w-md ml-5 mb-10'>Train your dog effectively from home
                        with expert-guided lessons, real-time feedback, and simple step-by-step
                        techniques designed for everyday pet owners</p>
                    <button className='bg-orange-400 text-white text-2xl px-3 py-3 rounded-2xl ml-5 '> Start Yee Free Trail</button>


                    <div className="flex gap-4  mt-10 ml-10 ">

                        {[
                            "ri-mental-health-line",
                            "ri-video-line",
                            "ri-smartphone-line",
                            "ri-focus-3-line"
                        ].map((icon, i) => (
                            <div key={i} className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                                <i className={`${icon} text-xl text-gray-700`}></i>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="grid grid-cols-2 gap-6 lg:ml-55 lg:py-5 py-10  w-full justify-center">
                    <div className="w-2/2 lg:w-72 h-40 lg:h-60">
                     <img className='w-full h-full object-cover rounded-xl' src="/img/t.avif" alt="" />
                    </div>
                    <div className=" lg:w-72 h-40 lg:h-60 bg-black"></div>
                    <div className=" lg:w-72 h-40 lg:h-60 bg-black"></div>
                    <div className=" lg:w-72 h-40 lg:h-60">
                        <img className='w-full h-full object-cover rounded-xl' src="/img/b.avif" alt="" />
                    </div>
                </div>

            </div>

        </div>
    )
}

export default HeroSection