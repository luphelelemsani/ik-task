import React from "react"

function About() {
  return (
    <div>
      <div className="container mx-auto mt-12 ">
        <h1 class="text-3xl font-bold capitalize text-gray-800 text-center mb-4 md:mb-18">
          Lorem ipsum something
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 md:h-screen align-center items-center justify-center">
          <div className="flex items-center justify-center w-full max-h-96 md:px-18 lg:px-36 hidden md:flex">
            <img
              src="/banner2.png"
              alt="site banner"
              className="object-scale-down w-3/4 h-3/4 max-w-2xl"
            />
          </div>
          <div class="mb-auto max-w-lg p-10 text-center md:pt-32">
            <h1 className="text-3xl font-semibold mb-5 tracking-wide text-gray-800">
              New Product, new Story
            </h1>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Vivamus vestibulum elit efficitur, elementum sapien a, aliquet
              ipsum. Fusce placerat dolor id cursus finibus. Aliquam tempus
              facilisis ipsum sit amet molestie. Proin lobortis eros a turpis
              tempor, sed ornare augue aliquam. Donec imperdiet nulla ut
              placerat molestie. In hendrerit blandit ante facilisis ultrices.
              Mauris vulputate metus sit amet ex dignissim, sed hendrerit nunc
              rhoncus.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
