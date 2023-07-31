"use client";
import { useEffect, useRef } from "react";

const FloatingInputBox = ({ label, placeholder, handleChange, value, error, type, ...rest }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    if(error) {
      inputRef.current.focus();
    }
  }, [error]);

  return (
    <div className='my-4 w-full'>
      <div className="flex justify-center items-center w-full mb-2">
        <label className='relative cursor-pointer w-full'>
          <input {...rest} type="text" ref={inputRef} value={value} onChange={handleChange} placeholder={placeholder} className={`py-4 px-3 w-full text-black ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-300 focus:border-black'} border-2 rounded-lg outline-none placeholder-gray-300 placeholder-opacity-0 transition duration-200`} />
          <span className={`text-base ${error ? "text-red-500 transform -translate-y-8 text-lg -translate-x-2 scale-75" : "text-gray-400"} text-opacity-80 bg-white absolute left-5 top-4 px-1 transition duration-200 input-text`}>{label}</span>
        </label>
      </div>
      <p className={`text-red-600 text-left ${!error ? 'hidden invisible': ""}`}>{`Please enter your ${label}`}</p>
    </div>
  );
};

export default FloatingInputBox;
