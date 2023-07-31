"use client";
import React, { useState } from 'react';
import FloatingInputBox from './FloatingInputBox';

const Login = () => {
  // Stores the values of each input box. 
  const [formDetails, setFormDetails] = useState({
    email: "",
    password: "",
    remember: false
  });

  // To determine if the input boxes of the elements are empty after the user clickes on the log in button.
  const [isInputEmpty, setIsInputEmpty] = useState({
    email: false,
    password: false,
  });

  // This function changes the state that records the values in the input boxes as the user types them.
  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;
    setFormDetails((prev) => {
      return {
        ...prev,
        [name]: type == "checkbox" ? checked : value,
      }
    });
  }

  // Handles the submittion of the login form.
  const handleSubmit = (e) => {
    e.preventDefault();

    // Checks if any of the form values are empty and, thus, changes the corresponding value in the isInputEmpty state.
    for(const key in isInputEmpty) {
      if(formDetails[key] === "") {
        handleIsInputEmpty(key);
        // Cancels the login process entirely to ensure the user enters a value in all the required fields.
        return;
      }
    }
    console.log(formDetails);
  }

  // Changes the appropriate value in the isInputEmpty, as specified by the "name" argument, to true to show that the corresponsing input element is empty!
  const handleIsInputEmpty = (name) => {
    setIsInputEmpty((prev) => {
      return {
        ...prev,
        [name]: true,
      }
    });
  }

  return (
    <div className='lg:w-1/2 w-full md:w-1/2 mx-auto'>
      <form onSubmit={handleSubmit} className='flex flex-col align-center justify-center'>
        <FloatingInputBox error={isInputEmpty.email} label="Email address" type="text" name="email" value={formDetails.email} placeholder="Email address" handleChange={handleChange}/>
        <FloatingInputBox error={isInputEmpty.password} label="Password" type="password" name="password" value={formDetails.password} placeholder="Password" handleChange={handleChange}/>
  
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
