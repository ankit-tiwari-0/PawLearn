import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-black text-white px-6 md:px-10 py-10">
  
  <div className="grid  grid-cols-4 gap-8">

    <div>
      <h1 className="text-xs lg:text-2xl font-semibold mb-4">
        Live Services
      </h1>
      <p className="lg:text-sm text-xs text-gray-400  line-clamp-5 sm:line-clamp-none">
        Interactive sessions with professionals and mentors.
      </p>
    </div>

    <div>
      <h1 className="text-xs lg:text-2xl font-semibold mb-4">
        Video Session
      </h1>
      <p className="lg:text-sm text-xs text-gray-400  line-clamp-4 sm:line-clamp-none">
        The content supports live video sessions where students can interact in real time.
      </p>
    </div>

    <div>
      <h1 className="text-xs lg:text-2xl font-semibold mb-4">
        Interact Courses
      </h1>
      <p className="lg:text-sm text-xs text-gray-400  line-clamp-5 sm:line-clamp-none">
        Interactive course experiences designed for better learning and engagement.
      </p>
    </div>

    <div>
      <h1 className="text-xs lg:text-2xl font-semibold mb-4">
        Progress Tracking
      </h1>
      <p className="lg:text-sm text-xs text-gray-400 line-clamp-5 sm:line-clamp-none">
        Track your learning progress and stay motivated at every step.
      </p>
    </div>

  </div>

  <div className="w-full bg-black text-white px-6  border-t-2 border-gray-800 mt-5 lg:mt-10 flex justify-center">
        <p className='text-xs py-2 line-clamp-1 sm:line-clamp-none'>© 2024 All rights reserved. Powered by education platform.</p>
  </div>

</div>
  )
}

export default Footer