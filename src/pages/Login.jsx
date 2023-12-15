import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const auth = getAuth(app);

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signInUser = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('SignIn Success');
  
      // Display success toast
      toast.success('Login successful!', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
  
      // Delay navigation to allow the user to see the toast
      setTimeout(() => {
        // Redirect to the Posts component after successful login
        navigate('/posts');
      }, 1000); // Adjust the delay time as needed
    } catch (error) {
      console.log(error);
  
      // Display error toast
      toast.error('Login failed. Please check your credentials.', {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
      });
    }
  };
  

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

        <input type="checkbox" className="text-white" />
        <label className="ml-2">I agree to the Terms & Conditions</label>
        <button
          onClick={signInUser}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-8"
        >
          Sign In
        </button>

        {/* Toast container for displaying notifications */}
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;


