// import React, { useEffect, useState } from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// import { app } from "./firebase";


// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Posts from "./pages/Posts";

// const auth = getAuth(app);

// function App() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         console.log("You are logged in", user);
//         setUser(user);
//       } else {
//         console.log("Logged Out");
//         setUser(null);
//       }
//     });


//     return () => unsubscribe();
//   }, []);

//   return (
//     <Routes>
//       {user ? (
//         // If the user is logged in, show the Posts component
//         <Route path="/posts" element={<Posts />} />
//       ) : (
//         // If the user is not logged in, show the Home, Login, and Signup routes
//         <>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<Signup />} />
//         </>
//       )}
//     </Routes>
//   );
// }

// export default App;





import React, { useEffect, useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Posts from "./pages/Posts";

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("You are logged in", user);
        setUser(user);
      } else {
        console.log("Logged Out");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <Routes>
      {/* Redirect to /posts if user is logged in */}
      {user && <Route path="/" element={<Navigate to="/posts" replace />} />}

      {/* Main routes */}
      <Route path="/posts" element={<Posts />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;



