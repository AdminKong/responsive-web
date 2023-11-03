// import React from "react";
import Typed from 'react-typed'

const Hero = () => {
  const goto = () => {
    location.href='get-started'
  }
  return (
    <div>
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center text-white">
        <p className="uppercase font-bold p-1">grow up with modern UI</p>
        <h1 className="md:text-5xl sm:text-4xl text-3xl font-bold uppercase md:py-4">SERVITE</h1>
        <div className='pb-7 p-3'>
            <p className="md:text-2xl sm:text-xl text-lg font-bold">
                Make Better Website With
            </p>
            <Typed 
            className="md:text-2xl sm:text-xl text-lg font-bold"
            strings={['Responsive', 'Simple Design', 'Smooth Animation']}
            typeSpeed={75}
            backSpeed={75}
            loop
            />
        </div>
        <p className="sm:text-base text-sm font-medium text-gray-300">
            Create and manage your own website to increase your bussiness
        </p>
        <button className='w-[200px] rounded-md font-semibold my-7 mx-auto py-4 shadow-2xl hover:bg-cyan-700 hover:shadow-cyan-600/95 duration-300 text-white bg-cyan-500 shadow-cyan-500/95' onClick={goto}>
        
          Get Started
        
        </button>
      </div>
    </div>
  );
};

export default Hero;
