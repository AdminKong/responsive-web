// import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className="lg:col-span-2">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Want tips & tricks to optimize your knowledge</h1>
            <p>Sign up to our newsletter and stay up to date</p>
        </div>
        <div className="my-5">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <input className="p-3 flex w-full rounded-md text-gray-800" type="email" placeholder="Enter Email"/>
                <button className="w-[200px] rounded-md font-medium my-7 mx-auto py-3 hover:bg-cyan-700 duration-300 text-white bg-cyan-500 sm:ml-4 px-6">Notify Me</button>
            </div>
            <p>We care about the protection of your data. Read our <span className="text-cyan-600">Privacy Policy.</span></p>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
