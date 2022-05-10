import React from 'react';
import spinnerImg from "../assets/spinner.svg";

const Loading = () => {
  return (
    <>
    <div className='h-32 pt-10 w-full flex items-center justify-center'>
      <div className='text-2xl font-semibold text-gray-700 text-center'>
        <img className='h-20 w-20' src={spinnerImg} alt="spinn" />
      </div>
    </div>
    
  </>
  );
};

export default Loading;