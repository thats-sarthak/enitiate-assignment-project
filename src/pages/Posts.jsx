import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';

const auth = getAuth();

const Posts = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log('You are logged in', user);
        setUser(user);
      } else {
        console.log('Logged Out');
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const output = await res.json();
        setData(output);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      // Redirect after sign-out is complete
      navigate('/', { replace: true });
    } catch (error) {
      console.error('Error signing out', error);
    }
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white">Posts</h1>
      <button
        onClick={handleLogout}
        className="text-white bg-red-500 px-3 py-1 rounded-lg mb-4"
      >
        Logout
      </button>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-3xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700 text-2xl">{post.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          className={`mx-2 px-3 py-1 rounded-full ${
            currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'
          }`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(data.length / postsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 px-3 py-1 rounded-full ${
              currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          className={`mx-2 px-3 py-1 rounded-full ${
            currentPage === Math.ceil(data.length / postsPerPage)
              ? 'bg-gray-300'
              : 'bg-blue-500 text-white'
          }`}
          disabled={currentPage === Math.ceil(data.length / postsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
