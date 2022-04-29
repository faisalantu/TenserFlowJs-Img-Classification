import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="my-16">
      <h1 className='text-3xl font-bold text-gray-700 text-center mt-16'>
        Opps 404 Not Found 😔
      </h1>
      <p className=' text-gray-700 text-center'>this page dose not exist</p>
      <div className='text-center my-5'>
        <Link
          to='/'
          
          className='bg-blue-100 px-3 py-2 rounded font-semibold'
        >
          HomePage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;