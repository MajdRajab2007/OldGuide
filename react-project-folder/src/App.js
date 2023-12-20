import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from "./components/Home"
function App() {

  let [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/posts").then((res) => res.json()).then((data) => setPosts(data) )
  },[])
  console.log(posts)
  return (

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About Page</div>} />
        </Routes>
  );
}

export default App;
