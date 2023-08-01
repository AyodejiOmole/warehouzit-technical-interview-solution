"use client";
import { BiErrorCircle } from "react-icons/bi";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

const FloatingInputBox = ({ label, placeholder, handleChange, value, error, type, ...rest }) => {
  // Stores the the type of the input box: text and password.
  // This allows to programmatically change the type of the input box.
  const [inputType, setInputType] = useState(type);
  return (
    <div className='my-3 w-full'>
      <div className="flex justify-center items-center w-full mb-2">
        <label className='relative cursor-pointer w-full'>
          <input 
            {...rest} 
            type={inputType}
            value={value} 
            onChange={handleChange} 
            placeholder={placeholder} 
            className={`py-4 px-3 w-full text-black ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-400 focus:border-black'} border-2 rounded outline-none placeholder-gray-300 placeholder-opacity-0 transition duration-200`} />
          <span className={`text-base ${error ? "text-red-500 transform -translate-y-8 text-lg -translate-x-2 scale-75" : "text-gray-400"} text-opacity-80 bg-white absolute left-5 top-4 px-1 transition duration-200 input-text`}>{label}</span>
          {inputType === "password" && <AiFillEye onClick={() => setInputType("text")} className="absolute fill-gray-400 right-2 bottom-4 w-6 h-6"/>}
          {inputType === "text" && type === "password" && <AiFillEyeInvisible onClick={() => setInputType("password")} className="absolute fill-gray-400 right-2 bottom-4 w-6 h-6"/>}
          {label === "Email address" && <Image src="/assets/user-solid.svg" alt="user logo" width={13} height={13} className="absolute fill-gray-400 right-2 opacity-50 bottom-5"/>}
        </label>
      </div>

      <div className={`flex gap-2 ${!error ? 'hidden invisible': ""}`}>
        <BiErrorCircle className="fill-red-500"/>
        <p className={`text-red-600 text-xs font-medium`}>{`Please ${label === "Confirm Password" ? "confirm your password" : "enter your " + label}`}</p>
      </div>
    </div>
  );
};

export default FloatingInputBox;
