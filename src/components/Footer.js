import React from 'react'
import image from '../components/Matthew-Bowler-resumeDec2021.pdf'

const Footer = () => {
    return (
      <header  className='flex bg-blue-400 text-white-100 text-3xl font-bold hover:text-white'>
      <div className='container mx-auto flex justify-between'>
          <a href={image}
          target="_blank"
          rel="noopener noreferrer"
          >
            <i class="fas fa-cloud text-white"></i> Download Resume
          </a>
        </div>
      </header>
   
    )
}

export default Footer
