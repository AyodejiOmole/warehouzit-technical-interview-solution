"use client";
import React, { useState } from 'react';
import FloatingInputBox from './FloatingInputBox';
import axios from 'axios';
import RoleComponent from './RoleComponent';

const Register = () => {
  // Stores the values of each input box. 
  const [formDetails, setFormDetails] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "spaceseeker",
    agreeToTerms: false
  });

  // To register if the user has clicked the register button and the registration has began asynchronously.
  const [isSubmitting, setIsSubmitting] = useState(false);

  // To determine if the input boxes of the elements are empty after the user clickes on the log in button.
  const [isInputEmpty, setIsInputEmpty] = useState({
    firstName: false,
    lastName: false,
    email: false,
    password: false,
    confirmPassword: false,
    phoneNumber: false,
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

  // Handles the submission of the register form.
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      "username": formDetails.firstName.toLowerCase() + ".a",
      "firstname": formDetails.firstName,
      "lastname": formDetails.lastName,
      "email": formDetails.email,
      "phonenumber": formDetails.phoneNumber,
      "role": formDetails.role,
      "password": formDetails.password
    }

    console.log(user);

    if (!formDetails.agreeToTerms) {
      window.alert("You have to agree to the terms and conditions before you can register!");
      return;
    }

    try {
      setIsSubmitting(prev => prev = true);

      // Checks if any of the form values are empty and, thus, changes the corresponding value in the isInputEmpty state.
      if(!validateInputFields()) {
        const res = await axios.post("https://warehouzitserver.onrender.com/api/v1/auth/register", user);
        console.log(res);
        if (!res.status === 201 || res.status === 200) return;

        window.alert("User created successfully!");
      // Cancels the login process entirely to ensure the user enters a value in all the required fields.
      } else return;

    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(prev => prev = false);
    }
  }

  // Function to verify if all required input fields are filled. It return true if at least one is empty and false is all are filled.
  const validateInputFields = () => {
    let atLeastOneIsEmpty;

    // Checks if all the input boxes are filled. 
    // If at least one is empty, it changes the atLeastOneIsEmpty field to true to denote that at least one of the input field isn't filled.
    for(const key in isInputEmpty) {
      if(formDetails[key] === "") {
        handleIsInputEmpty(key);
        
        atLeastOneIsEmpty = true;
      }
    }

    // Checks if the password the user enters matches the one entered into the confirm password input box.
    if(formDetails.password !== formDetails.confirmPassword) {
      atLeastOneIsEmpty = true;
      for(const key in isInputEmpty) {
        if(key === "confirmPassword") {
          handleIsInputEmpty(key);
        }
      }
    }

    return atLeastOneIsEmpty;
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

  // Changes the values of formDetails.role as the user selects the role - spaceseeker or spaceowner - from the RoleComponent
  const handleRoleComponentClick = (userRole) => {
    setFormDetails((prev) => {
      return {
        ...prev,
        role: userRole,
      }
    });
  }

  return (
    <div className='lg:w-1/3 w-full md:w-1/2 mx-auto mt-6'>
      <form onSubmit={handleSubmit} className='flex flex-col align-center justify-center w-full'>
        <RoleComponent role={formDetails.role} handleClick={handleRoleComponentClick}/>
        <FloatingInputBox error={isInputEmpty.firstName} label="First name" type="text" name="firstName" value={formDetails.firstName} placeholder="First name" handleChange={handleChange}/>
        <FloatingInputBox error={isInputEmpty.lastName} label="Last name" type="text" name="lastName" value={formDetails.lastName} placeholder="Last name" handleChange={handleChange}/>
        <FloatingInputBox error={isInputEmpty.email} label="Email address" type="text" name="email" value={formDetails.email} placeholder="Email address" handleChange={handleChange}/>
        <FloatingInputBox error={isInputEmpty.phoneNumber} label="Phone Number" type="password" name="phoneNumber" value={formDetails.phoneNumber} placeholder="Phone number" handleChange={handleChange}/>
        <FloatingInputBox error={isInputEmpty.password} label="Password" type="password" name="password" value={formDetails.password} placeholder="Password" handleChange={handleChange}/>
        <FloatingInputBox error={isInputEmpty.confirmPassword} label="Confirm Password" type="password" name="confirmPassword" value={formDetails.confirmPassword} placeholder="Confirm password" handleChange={handleChange}/>

        <div className='flex gap-2 items-center align-center w-full mb-6 mx-auto'>
          <input
            type='checkbox'
            name='agreeToTerms'
            checked={formDetails.agreeToTerms}
            onChange={handleChange}
          />
          <label htmlFor='remember' className='text-black text-sm'>I agree to the terms and conditions</label>
        </div>
          
        <button 
          className={`mx-auto w-full ${isSubmitting ? "cursor-not-allowed bg-gray-300" : "cursor-pointer bg-primary-green"} text-white text-sm rounded shadow p-4 font-semi-bold`} 
          type="submit"
          disabled={isSubmitting}>
          {/* hover:bg-white hover:border hover:border-primary-green hover:text-primary-green */}
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </div>
  )
}

export default Register;
