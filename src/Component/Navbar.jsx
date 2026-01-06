import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">MyWebsite</h1>

      <div className="space-x-6">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:text-gray-200"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:text-gray-200"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "font-semibold underline" : "hover:text-gray-200"
          }
        >
          Blog
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
