import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 text-white shadow-lg mt-4 mx-4 rounded-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <Link to="/" className="text-3xl font-extrabold tracking-wide mr-60">TutorHub</Link>
        <button
          onClick={toggleMenu}
          className="block lg:hidden px-3 py-2 border rounded text-white border-white hover:text-blue-500 hover:border-blue-500"
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
        <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow">
            <Link to="/events" className="block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-blue-500 transition duration-300">Events</Link>
            <Link to="/resources" className="block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-blue-500 transition duration-300">Resources</Link>
            <Link to="/community" className="block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-blue-500 transition duration-300">Community</Link>
            <Link to="/profile" className="block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded-md text-lg font-medium hover:bg-white hover:text-blue-500 transition duration-300">Profile</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;