import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="relative flex flex-col items-center justify-center h-[80vh] bg-transparent overflow-hidden">
      {/* Background image container */}
      

      {/* Foreground content */}
      <div className="relative z-10 text-center px-6">
        <h1 className="text-5xl font-bold mb-6 text-gray-900 text-shadow-grey-md">
          Welcome to <span className="text-blue-600">LogiSync</span>
        </h1>
        <p className="text-lg mb-8 text-gray-700 tracking-wide">
          Streamline your inventory management with ease and efficiency.
        </p>
        <a
          href="/sign-in"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Get Started
        </a>
      </div>
    </div>
  )
}

export default Hero
