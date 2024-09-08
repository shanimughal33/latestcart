// src/components/Navbar.js
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../header';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full p-4 text-white bg-transparent z-10">
      <div className="container flex items-center justify-between mx-auto">
        <div className="text-2xl font-bold ">
          <NavLink to="/" exact>MyApp</NavLink>
        </div>
        <div className="hidden space-x-4 md:flex">
          <NavLink
            to="/"
            exact
            className="px-3 py-2 text-xl font-semibold rounded hover:bg-blue-700"
            activeClassName="bg-blue-700"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="px-3 py-2 text-xl font-semibold rounded hover:bg-blue-700"
            activeClassName="bg-blue-700"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className="px-3 py-2 text-xl font-semibold rounded hover:bg-blue-700"
            activeClassName="bg-blue-700"
          >
            Contact
          </NavLink>
          <Header/>
        </div>
        <button
          className=" md:hidden"
          onClick={toggleSidebar}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isSidebarOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
            ></path>
          </svg>
        </button>
      </div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-transform transform ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="w-64 h-full p-4 bg-black/80">
          <button
            className="mb-4 text-white"
            onClick={toggleSidebar}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          
          <NavLink
            to="/"
            exact
            className="block px-3 py-2 text-white rounded hover:bg-blue-700"
            activeClassName="bg-blue-700"
            onClick={toggleSidebar}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block px-3 py-2 text-white rounded hover:bg-blue-700"
            activeClassName="bg-blue-700"
            onClick={toggleSidebar}
          >
            About
          </NavLink>
          
          <NavLink
            to="/contact"
            className="block px-3 py-2 text-white rounded hover:bg-blue-700"
            activeClassName="bg-blue-700"
            onClick={toggleSidebar}
          >
            Contact
          </NavLink>
    
          
        
        </div>
     
       
      </div>
     
    </nav>
    
  );
};

export default Navbar;
