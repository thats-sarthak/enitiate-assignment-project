import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


  const auth = getAuth(app);

  const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const createUser = async () => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Signup successful!', userCredential.user);

        toast.success('SignUp successful!', {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 2000,
        });


        // Use navigate to redirect to the Posts page after successful signup
        // navigate('/posts');

        setTimeout(() => {
          // Use navigate to redirect to the Posts page after successful signup
          navigate('/posts');
        }, 1000);
      } catch (error) {
        console.error('Error signing up:', error.message);
        setError(error.message);

      }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-8 text-white">SignUp to your account</h1>
          <div className="mb-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="mt-1 p-2 w-full border bg-transparent text-white rounded"
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
            onClick={createUser}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full mt-8"
          >
            Sign Up
          </button>
          <ToastContainer />

          <h1 className="mt-5">
            Already have an account ?
            <Link to="/login">
              <span className="text-blue-500 cursor-pointer ml-2">
                <button>Login</button>
              </span>
            </Link>
          </h1>
        </div>
      </div>
    );
  };

  export default Signup;

