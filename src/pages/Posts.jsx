// import React, { useEffect, useState } from 'react';

// const Posts = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//         const output = await res.json();
//         setData(output);
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div className=" bg-black min-h-screen">
//       <h1 className="text-3xl font-bold mb-4">Posts</h1>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ml-8 mr-8">
//         {data.map((post) => (
//           <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-bold mb-2">{post.title}</h2>
//             <p className="text-gray-700">{post.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Posts;




import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const output = await res.json();
        setData(output);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

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
    <div className=" bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4 text-white">Posts</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <button
          onClick={prevPage}
          className={`mx-2 px-3 py-1 rounded-full ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: Math.ceil(data.length / postsPerPage) }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-2 px-3 py-1 rounded-full ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={nextPage}
          className={`mx-2 px-3 py-1 rounded-full ${currentPage === Math.ceil(data.length / postsPerPage) ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
          disabled={currentPage === Math.ceil(data.length / postsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Posts;
