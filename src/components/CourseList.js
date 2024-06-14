import React from 'react'
import Search from './Search'

export default function CourseList() {
  return (
    <div className='m-5'>
      <Search />
      <div className='flex flex-col py-10 text-center space-y-20 lg:space-y-0 rounded-lg lg:space-x-10 lg:flex-row'>
        <div class="w-full md:w-1/2 m-auto rounded p-5 shadow-lg">
          <a href='/coursedetails'>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mt-2 mb-5">Web Development</div>
            <p class="text-gray-700 text-base">Instructor: John</p>
          </div>
          </a>
        </div>
      </div>
      <div className='flex flex-col py-10 text-center space-y-20 lg:space-y-0 rounded-lg lg:space-x-10 lg:flex-row'>
        <div class="w-full md:w-1/2 m-auto rounded p-5 shadow-lg">
          <a href='/coursedetails'>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mt-2 mb-5">Data Structures</div>
            <p class="text-gray-700 text-base">Instructor: Arun</p>
          </div>
          </a>
        </div>
      </div>
      <div className='flex flex-col py-10 text-center space-y-20 lg:space-y-0 rounded-lg lg:space-x-10 lg:flex-row'>
        <div class="w-full md:w-1/2 m-auto rounded p-5 shadow-lg">
          <a href='/coursedetails'>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mt-2 mb-5">Algorithms</div>
            <p class="text-gray-700 text-base">Instructor: Rocky</p>
          </div>
          </a>
        </div>
      </div>
      <div className='flex flex-col py-10 text-center space-y-20 lg:space-y-0 rounded-lg lg:space-x-10 lg:flex-row'>
        <div class="w-full md:w-1/2 m-auto rounded p-5 shadow-lg">
          <a href='/coursedetails'>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mt-2 mb-5">C++</div>
            <p class="text-gray-700 text-base">Instructor: Rinki</p>
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}
