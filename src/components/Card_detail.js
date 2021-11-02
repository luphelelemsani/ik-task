import React from "react"
import "../styles/navbar.css"

export default function Card_detail() {
  return (
    <div className="my-20">
      {" "}
      <div className="holder mx-auto  w-10/12 grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 ">
        <div className="each mb-10 m-2 hover:shadow-lg relative rounded-md transition-shadow duration-300 ease-in-out">
          <img
            className="w-full rounded-t-lg "
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Blog Picture"
          />
          <div className="p-4">
            <h3 className="title font-bold block cursor-pointer">
              Blog Title #1
            </h3>
            <p className="description text-sm block text-gray-600 py-2 mb-2">
              Blog excerpt - first lines - for approx two lines
            </p>
          </div>
        </div>
        <div className="each mb-10 m-2 hover:shadow-lg relative rounded-md transition-shadow duration-300 ease-in-out">
          <img
            className="w-full rounded-t-lg "
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Blog Picture"
          />
          <div className="p-4">
            <h3 className="title font-bold block cursor-pointer">
              Blog Title #1
            </h3>
            <p className="description text-sm block text-gray-600 py-2 mb-2">
              Blog excerpt - first lines - for approx two lines
            </p>
          </div>
        </div>
        <div className=" blog_card each mb-10 m-2 hover:shadow-lg relative rounded-md transition-shadow duration-300 ease-in-out">
          <img
            className="w-full rounded-t-lg "
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Blog Picture"
          />
          <div className="p-4">
            <h3 className="title font-bold block cursor-pointer">
              Blog Title #1
            </h3>
            <p className="description text-sm block text-gray-600 py-2 mb-2">
              Blog excerpt - first lines - for approx two lines
            </p>
          </div>
        </div>
        <div className="blog_card each mb-10 m-2 hover:shadow-lg relative rounded-md transition-shadow duration-300 ease-in-out">
          <img
            className="w-full rounded-t-lg "
            src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
            alt="Blog Picture"
          />
          <div className="p-4">
            <h3 className="title font-bold block cursor-pointer">
              Blog Title #1
            </h3>
            <p className="description text-sm block text-gray-600 py-2 mb-2">
              Blog excerpt - first lines - for approx two lines
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          type="button"
          className="border border-blue-500 text-blue-500 rounded-full px-4 py-2 m-2 transition duration-500 ease select-none hover:text-white hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          Read more
        </button>
      </div>
    </div>
  )
}
