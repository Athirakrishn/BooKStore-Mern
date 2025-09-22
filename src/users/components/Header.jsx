
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>

     <div className="w-full">
      <div className="flex items-center justify-between px-6 py-3 border-b">
        <div className="flex  items-center gap-5">
          <img src="/logo.png" alt="logo"  className="w-8 h-8"/>
          <h1 className="text-lg font-bold">BOOK STORE</h1>
        </div>

      
        <div className="flex items-center gap-4 text-xl">
        <FontAwesomeIcon icon={faInstagram} />
           <FontAwesomeIcon icon={faTwitter} />        
          <FontAwesomeIcon icon={faFacebook} />     
             </div>
      </div>

   
      <nav className="bg-gray-900 text-white">
        <ul className="flex justify-center gap-8 py-3 text-sm">
          <li className="cursor-pointer hover:text-gray-300">Home</li>
          <li className="cursor-pointer hover:text-gray-300">Books</li>
          <li className="cursor-pointer hover:text-gray-300">Careers</li>
          <li className="cursor-pointer hover:text-gray-300">Contact</li>
        </ul>
      </nav>
    </div>

    </div>
  )
}

export default Header