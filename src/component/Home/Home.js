import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';
import Review from '../Review/Review';

const Home = () => {
  const reviwes = useLoaderData()



  return (
    <div>
      <div className="flex justify-center">
        <div
          className="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-xl md:flex-row">
          <img
            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
            src={'https://www.robo-dyne.com/wp-content/uploads/2022/01/11224-04c-2.jpg'}
            alt="" />
          <div className="flex flex-col justify-start p-6">
            <h5
              className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
              Arduino uno
              <br />
              Make your dream projects
            </h5>
            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              The Arduino Uno is an open-source microcontroller board based on the Microchip ATmega328P microcontroller and developed by Arduino.cc and initially released in 2010.The board is equipped with sets of digital and analog input/output (I/O) pins that may be interfaced to various expansion boards (shields) and other circuits.
            </p>
            <p className="text-xs text-neutral-500 dark:text-neutral-300">
              <a href="https://www.youtube.com/watch?v=_ItSHuIJAJ8&ab_channel=HackerEarth" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                  <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </span>
                <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Demo Video</span>
              </a>
            </p>
          </div>
        </div>
      </div>




      <h1 className='my-10 text-center text-rose-500 text-2xl font-black font-mono'>Reviews from buyers</h1>
      <div className='grid grid-cols-3 gap-2 font-sans'>
        {

          reviwes.slice(0, 3).map(review => <Review review={review} key={review.id}></Review>)

        }

      </div>
     

      <h3 className='my-10 mx-auto text-white text-2xl font-black font-mono bg-sky-500 hover:bg-sky-700 border  w-1/4 rounded-lg p-1 pl-4'> <NavLink to='/reviews'>View More reviews...</NavLink> </h3>
    </div>
  );
};

export default Home;