"use client";
import React from 'react';
import Login from '@/components/Login';
import Register from '@/components/Register';
import { useState } from 'react';

const GetStarted = () => {
  // the visiblePage state determines the page - login or register - that is currently visible to the user.
  const [visiblePage, setVisiblePage] = useState("login");

  // Changes page, login or register, visible to the user.
  const handleClick = (page) => {
    setVisiblePage(prev => {return page;});
  }
  return (
    <div className='w-full lg:p-8 p-4'>

      {/* Tab to change the page visible to the user from Login to Register or as the user deems fits. */}
      <div className='flex border-b-2 border-gray-300 lg:w-1/3 w-full md:w-1/2 mx-auto mt-12'>
        <div className='w-full flex justity-between gap-3'>
            <p 
                onClick={() => handleClick("login")}
                className={visiblePage === "login" ? 'py-3 transition duration-500 text-base text-primary-green border-primary-green border-b-4 hover:cursor-pointer px-3 font-medium' : "lg:px-5 text-base px-1 py-3 transition duration-500 hover:cursor-pointer opacity-50"}>
                Log in
            </p>
            <p 
                onClick={() => handleClick("register")}
                className={visiblePage !== "login" ? 'transition duration-500 py-3 text-primary-green text-base border-primary-green border-b-4 hover:cursor-pointer px-3 font-medium' : "lg:px-5 px-1 text-base transition duration-500 hover:cursor-pointer py-3 opacity-50"}>
              Register                
            </p>
        </div>
      </div>

      {visiblePage === "login" ? <Login/> : <Register/>}
    </div>
  )
}

export default GetStarted;
