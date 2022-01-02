import React from 'react'
import image from '../components/Matthew-Bowler-resumeDec2021.pdf'

const Footer = () => {
    return (
      <footer  className='footer p-10 bg-blue-400 text-white-100 text-3xl font-bold hover:text-white footer-center'>
      <div className='container mx-auto flex justify-between'>
          <a href={image}
          target="_blank"
          rel="noopener noreferrer"
          >
            <i class="fas fa-cloud text-white"></i> Download Resume
          </a>
        </div>
      </footer>
   
    )
}

export default Footer
