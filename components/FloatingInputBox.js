"use client";
import React, { useState } from 'react';

const FloatingInputBox = ({ label, placeholder, handleChange, value, type, ...rest }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full my-5">
        <label className='relative cursor-pointer lg:w-1/2 w-full md:w-1/2'>
          <input {...rest} type="text" value={value} onChange={handleChange} placeholder={placeholder} className='py-4 px-2 w-full text-black border-gray-300 border-2 rounded-lg outline-none focus:border-black placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
          <span className='text-base text-gray-400 text-opacity-80 bg-white absolute left-5 top-4 px-1 transition duration-200 input-text'>{label}</span>
        </label>
      </div>
    </>
  );
};

export default FloatingInputBox;
