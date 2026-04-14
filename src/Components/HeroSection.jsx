import React from 'react'
import 'remixicon/fonts/remixicon.css'

const HeroSection = () => {
    return (
        <div className='w-full  bg-white border-2 border-transparent rounded-xl py-7 px-4'>
            <div>
                <div className='px-3 lg:px-10 '>
                    <h3 className='text-orange-400 lg:text-2xl text-xl py-1.5 font-bold'>SErvices</h3>
                    <h1 className='text-sm lg:text-5xl font-bold mb-4 ml-5'>Train Your Dog
                        <br />
                        From Pawlearn<br /> </h1>
                    <p className='max-w-xs lg:max-w-md ml-5 mb-10'>Train your dog effectively from home
                        with expert-guided lessons, real-time feedback, and simple step-by-step
                        techniques designed for everyday pet owners</p>
                    <button className='bg-orange-400 text-white text-2xl px-5 py-3 rounded-2xl ml-5'> Start Yee Free Trail</button>
                </div>

                <div className="flex gap-4  mt-6 ml-10">

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

        </div>
    )
}

export default HeroSection