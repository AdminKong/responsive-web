// import React from 'react'

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
            <p className='text-center text-3xl font-bold'>$220/month</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
              <p className='py-2 border-b mx-8'>1 User Allowed</p>
              <p className='py-2 border-b mx-8'>Just Styling Without Database</p>
              <p className='py-2 border-b mx-8'>Tailwindcss and React</p>
              <p className='py-2 border-b mx-8'>Send up to 5 GB</p>
            </div>
            <button className='w-[200px] rounded-md font-semibold my-7 mx-auto shadow-2xl hover:bg-blue-700 hover:shadow-blue-600/95 duration-300 text-white bg-blue-500 px-6 py-4'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
            <p className='text-center text-3xl font-bold'>$520/month</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>10 TB Storage</p>
              <p className='py-2 border-b mx-8'>10 User Allowed</p>
              <p className='py-2 border-b mx-8'>Use mongoDB and PHP</p>
              <p className='py-2 border-b mx-8'>Tailwindcss React Inertia Laravel</p>
              <p className='py-2 border-b mx-8'>Send up to 20 GB</p>
            </div>
            <button className='w-[200px] rounded-md font-semibold my-7 mx-auto shadow-2xl hover:bg-blue-700 hover:shadow-blue-600/95 duration-300 text-white bg-blue-500 px-6 py-4'>Start Trial</button>
        </div>
        <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
            <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
            <p className='text-center text-3xl font-bold'>$320/month</p>
            <div className='text-center font-medium'>
              <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
              <p className='py-2 border-b mx-8'>3 User Allowed</p>
              <p className='py-2 border-b mx-8'>Use MySQL</p>
              <p className='py-2 border-b mx-8'>Tailwindcss React Laravel</p>
              <p className='py-2 border-b mx-8'>Send up to 15 GB</p>
            </div>
            <button className='w-[200px] rounded-md font-semibold my-7 mx-auto shadow-2xl hover:bg-blue-700 hover:shadow-blue-600/95 duration-300 text-white bg-blue-500 px-6 py-4'>Start Trial</button>
        </div>
      </div>
    </div>
  )
}

export default Card