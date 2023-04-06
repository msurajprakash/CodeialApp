// import { useEffect, useState } from "react";
// import { getPosts } from "../api";
import { Home, Login } from '../pages';
import { Loader, Navbar } from './'
import { Routes, Route } from 'react-router-dom';
import { useAuth } from "../hooks";

const About = () => {
  return <h1>About</h1>
}

function App() {
  const auth = useAuth();
  // const [posts, setPosts] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await getPosts();
  //     console.log('response', response);

  //     if (response.success) {
  //       setPosts(response.data.posts);
  //     }

  //     setLoading(false);
  //   };

  //   fetchPosts();
  // }, []);

  if (auth.loading) {
    return <Loader />
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home posts={[]} />} />
        <Route path="/about" element={<About />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;