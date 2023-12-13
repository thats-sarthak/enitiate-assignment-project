import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
  const hi = () => {
    console.log('hi');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-8 text-white">SignUp to your account</h1>
        <div className="mb-4">
          <input
            className="mt-1 p-2 w-full border bg-transparent text-white rounded"
            type="email"
            required
            placeholder="jon.smith@gmail.com"
          />
        </div>
        <div className="mb-4">
          <input
            className="mt-1 p-2 w-full border bg-transparent text-white rounded"
            type="password"
            required
            placeholder="..........."
          />
        </div>

        <input type ="checkbox" className='text-white' />
        <label className='ml-2'>I agree to the Terms & Conditions</label>
        <button
          onClick={hi}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-8"
        >
          Sign Up
        </button>

        <h1 className='mt-5'>Already have an account ?  
        <Link to ="/login">
        <span className='text-blue-500 cursor-pointer ml-2'>
            <button>Login</button>

        </span>
        </Link>
        </h1>

      </div>
    </div>
  );
};

export default Signup;