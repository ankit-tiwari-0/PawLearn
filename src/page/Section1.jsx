import React from 'react'
import NavBar from '../Components/NavBar'

const home = () => {
  return (
    <div className="min-h-[100dvh] w-full relative bg-[url('/img/dogimg.jpg')] bg-cover bg-center scale-110">

      <NavBar />

      <div className="flex items-start px-4 sm:px-6 lg:px-10 mt-10">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-bold max-w-xl">
          Train Your Dog From Home
        </h1>
      </div>

    </div>
  )
}

export default home