"use client";
import { BiErrorCircle } from "react-icons/bi";

const FloatingInputBox = ({ label, placeholder, handleChange, value, error, type, ...rest }) => {
  return (
    <div className='my-3 w-full'>
      <div className="flex justify-center items-center w-full mb-2">
        <label className='relative cursor-pointer w-full'>
          <input 
            {...rest} 
            type="text" 
            value={value} 
            onChange={handleChange} 
            placeholder={placeholder} 
            className={`py-4 px-3 w-full text-black ${error ? 'border-red-500 focus:border-red-500' : 'border-gray-400 focus:border-black'} border-2 rounded outline-none placeholder-gray-300 placeholder-opacity-0 transition duration-200`} />
          <span className={`text-base ${error ? "text-red-500 transform -translate-y-8 text-lg -translate-x-2 scale-75" : "text-gray-400"} text-opacity-80 bg-white absolute left-5 top-4 px-1 transition duration-200 input-text`}>{label}</span>
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
