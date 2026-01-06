import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Navbar from "./Component/Navbar.jsx";
import Home from "./Component/Home.jsx";
import About from "./Component/About.jsx";
import Blog from "./Component/Blog.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
