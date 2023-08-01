import React from 'react';
import Login from '@/components/Login';
import Register from '@/components/Register';

const GetStarted = () => {
  return (
    <div className='w-full lg:p-8 p-4'>
      {/* <Login/> */}
      <Register />
    </div>
  )
}

export default GetStarted;
