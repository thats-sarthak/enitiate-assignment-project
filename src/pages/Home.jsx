import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl md:text-6xl lg:text-8xl mb-4 md:mb-8'>This is a home page of the</h1>
        <h1 className='text-blue-500 text-2xl md:text-4xl lg:text-6xl mb-8 md:mb-12'>ENITIATE Assignment Project</h1>

        <Link to="/signup">
          <button className='border border-transparent rounded p-3 md:p-5 mt-4 md:mt-8 bg-blue-500 font-bold'>
            Click Here For SignUp....
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

