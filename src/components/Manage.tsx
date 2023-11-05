// import React from 'react'
import Laptop from "../assets/Server-Illustration.png"

const Manage = () => {
  return (
    <div className="bg-white w-full py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
            <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
            <div className="flex flex-col justify-center">
                <p className="font-bold text-cyan-600">SERVER HOSTINGERS DASHBOARD</p>
                <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Database Centrally</h1>
                <p className="py-3 pb-1 md:pb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet volutpat consequat mauris nunc congue nisi. Aliquam vestibulum morbi blandit cursus risus at ultrices mi tempus.</p>
                <button className="w-[200px] rounded-md font-semibold mx-auto py-5 hover:bg-blue-700 shadow hover:shadow-xl hover:shadow-blue-600/30 duration-300 text-white bg-blue-500 my-6 mx-auto md:m-0 py-3 border border-gray-800/10 shadow-lg">Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Manage
