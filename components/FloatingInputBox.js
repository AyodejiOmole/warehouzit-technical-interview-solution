"use client";
import React, { useState } from 'react';

const FloatingInputBox = ({ label, placeholder, ...rest }) => {

  return (
    <>
      <div className="flex justify-center items-center w-full">
        <label className='relative cursor-pointer'>
          <input {...rest} type="text" placeholder={placeholder} className='p-4 text-white border-gray-300 border-2 rounded-lg border-opacity-50 outline-none focus:border-black placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
          <span className='text-base text-gray-400 text-opacity-80 bg-white absolute left-5 top-4 px-1 transition duration-200 input-text'>{label}</span>
        </label>
      </div>
    </>
  );
};

export default FloatingInputBox;
