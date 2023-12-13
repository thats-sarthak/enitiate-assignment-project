import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Posts from "./pages/Posts";
import { getDatabase, ref, set  } from "firebase/database";
import {app} from "./firebase"

const db = getDatabase(app)


function App() {
 
  const pushData = () => {
    set(ref(db, 'users/sarthak'), {
      id:1,
      name:"Sarthak",
    });
  };

  return (
    <div >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/posts" element={<Posts />} />
    </Routes>
   
    </div>
  );
}

export default App;
