import React, { useState } from 'react';
import { Link } from 'react-router-dom';


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebase';

const auth = getAuth(app);

const Login = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");


  const signInUser = () => {
    signInWithEmailAndPassword(auth, email, password).then(value =>  console.log("SignIn Success"))
    .catch((error) => {
      console.log(error);
    });
  }



  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-bold mb-8 text-white">Login to your account</h1>
        <div className="mb-4">
          <input
            className="mt-1 p-2 w-full border bg-transparent text-white rounded"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            type="email"
            required
            placeholder="jon.smith@gmail.com"
          />
        </div>
        <div className="mb-4">
          <input
           onChange={(e) => setPassword(e.target.value)}
           value={password}
            className="mt-1 p-2 w-full border bg-transparent text-white rounded"
            type="password"
            required
            placeholder="..........."
          />
        </div>

        <input type ="checkbox" className='text-white' />
        <label className='ml-2'>I agree to the Terms & Conditions</label>
        <button
        onClick={signInUser}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-8"
        >
          Sign In
        </button>

        
        

      </div>
    </div>
  );
};

export default Login;
