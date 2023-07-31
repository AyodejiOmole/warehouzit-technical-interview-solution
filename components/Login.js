"use client";
import React, { useState } from 'react';
import FloatingInputBox from './FloatingInputBox';

const Login = () => {
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    remember: false
  });

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: type == "checkbox" ? checked : value,
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formDetails);
  }

  return (
    <div className='w-full'>
      <form onSubmit={handleSubmit} className='flex flex-col align-center justify-center'>
        <FloatingInputBox label="Email address" type="text" name="email" value={formDetails.email} placeholder="Email address" handleChange={handleChange}/>
        <FloatingInputBox label="Password" type="password" name="password" value={formDetails.password} placeholder="Password" handleChange={handleChange}/>
  
        <div className='w-full mb-5 flex items-center align-center justify-between lg:w-1/2 w-full md:w-1/2 mx-auto'>
          <div className='flex gap-2 items-center align-center'>
            <input
              type='checkbox'
              name='remember'
              id='remember'
              checked={formDetails.remember}
              onChange={handleChange}
            />
            <label htmlFor='remember' className='text-black text-sm'>Remember me</label>
          </div>
          
          <p className='text-black text-sm font-normal'>Forgot password?</p>
        </div>

        <button className='bg-primary-green mx-auto text-white text-sm hover:bg-white hover:border hover:border-primary-green hover:text-primary-green rounded shadow lg:w-1/2 w-full md:w-1/2 p-4 font-semi-bold' type="submit">
          Log in
        </button>
      </form>
    </div>
  )
}

export default Login;
