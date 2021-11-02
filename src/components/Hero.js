import React from "react"

function Hero() {
  return (
    <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 md:h-128 md:py-16 md:flex-row md:items-center md:space-x-6">
      <div class="p-8">
        <h1 className="text-3xl font-medium tracking-wide text-gray-800 md:text-4xl">
          Start new... Today!
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Vivamus vestibulum elit efficitur, elementum sapien a, aliquet ipsum
        </p>
      </div>
      <div className="flex items-center justify-center w-full h-96 md:w-1/2">
        <img
          src="/banner.png"
          alt="site banner"
          className="object-scale-down w-full h-full max-w-2xl"
        />
      </div>
    </div>
  )
}

export default Hero
