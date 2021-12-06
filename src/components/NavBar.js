import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <header className='bg-blue-400'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName="text-white"
            className='inflex-flex items-center py-6 px-3 mr-4 test-red-100 hover:text-green-800 text-4xl font-bold cursive tracking-widest'
          >
            Home
          </NavLink>
          <NavLink to='/post' activeClassName="text-red-100 bg-red-600" className="inflex-flex items-center py-3 px-3 my-4 test-red-300 hover:text-green-800">Blog Posts</NavLink>
          <NavLink to='/project' activeClassName="text-red-100 bg-red-600" className="inflex-flex items-center py-3 px-3 my-4 test-red-200 hover:text-green-800">Projects</NavLink>
          <NavLink to='/about' activeClassName="text-red-100 bg-red-700" className="inflex-flex items-center py-3 px-3 my-4 test-red-500 hover:text-green-800">About</NavLink>
        </nav>
        <div className="inline-flex py-6 px-6">
<SocialIcon url="https://github.com/mbowler03" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
<SocialIcon url="https://www.linkedin.com/in/matthewbowler03/" className="mr-4" tarket="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
<SocialIcon url="https://www.facebook.com/NorthFloridaHealthyVending" className="mr-4" tarket="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
