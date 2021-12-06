import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

const NavBar = () => {
  return (
    <header className='flex bg-blue-400'>
      <div className='container mx-auto flex justify-between'>
        <nav className='flex'>
          <NavLink
            to='/'
            exact
            activeClassName="text-white"
            className='inflex-flex items-center py-4 px-3  test-red-100 hover:text-green-800 text-3xl font-bold cursive tracking-widest'
          >
            Home
          </NavLink>
          <NavLink to='/post' activeClassName="text-red-100 bg-red-600" className="inflex-flex items-center py-2 px-3 my-4 test-red-300 hover:text-green-800">Blog</NavLink>
          <NavLink to='/project' activeClassName="text-red-100 bg-red-600" className="inflex-flex items-center py-2 px-3 my-4 test-red-200 hover:text-green-800">Projects</NavLink>
          <NavLink to='/about' activeClassName="text-red-100 bg-red-700" className="inflex-flex items-center py-2 px-3 my-4 test-red-500 hover:text-green-800">About</NavLink>
        </nav>
        <div className="flex flex-wrap items-center py-2 px-3">
<SocialIcon url="https://github.com/mbowler03" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
<SocialIcon url="https://www.linkedin.com/in/matthewbowler03/" className="mr-4" tarket="_blank" fgColor="#fff" style={{ height: 35, width: 35}}/>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
