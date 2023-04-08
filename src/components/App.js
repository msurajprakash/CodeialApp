// import { useEffect, useState } from "react";
// import { getPosts } from "../api";
import { Home, Login, Signup, Settings } from '../pages';
import { Loader, Navbar } from './'
import { Routes, Route } from 'react-router-dom';
import { useAuth } from "../hooks";

// const About = () => {
//   return <h1>About</h1>
// }

function App() {
  const auth = useAuth();

  if (auth.loading) {
    return <Loader />
  }
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/about" element={<About />} /> */}
        <Route path="/Login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/Settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;