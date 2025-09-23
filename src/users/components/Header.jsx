
import { faFacebook, faInstagram, faTwitter, faUber } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [listStatus,setListStatus] = useState(false)
  return (
    <>

     {/* <div className="w-full">
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
    </div> */}
    <div className="grid grid-cols-3 p-3">
      {/* logo */}
   <div className='flex items-center'>
       <img src="/logo.png" alt="" className='w-12 h-12'/>
       <h1 className="text-2xl font-bold ms-2 md:hidden">BOOKSTORE</h1>
   </div>
   {/* title */}

   <div className='md:flex justify-center items-center hidden'> 
    <h1 className='text-3xl text-bold '>BOOKSTORE</h1>
   </div>

   {/* login */}
   <div className='md:flex justify-end items-center hidden'> 
    <FontAwesomeIcon icon={faInstagram} />
           <FontAwesomeIcon icon={faTwitter} />        
          <FontAwesomeIcon icon={faFacebook} /> 
          {/* login link   */}
          <Link to={'/login'}> <button className='border border-black rounded px-3 py-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} className='me-2' /> Login</button> </Link>
   </div>

    </div>
  <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center '>
    {/* menubar and login */}
    <div className="flex justify-between text-2xl items-center md:hidden ">
      <button  onClick={()=>setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} /></button>
      {/* login link */}
       {/* login link   */}
          <Link to={'/login'}> <button className='border border-black rounded px-3 py-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} className='me-2' /> Login</button> </Link>
 
    </div>
      <ul  className={listStatus?"flex flex-col":"justify-center md:flex items-center hidden"}>
        <li className='md:mx-4 mt-3 md:mt-0'><Link Link to={'/'}>HOME          </Link></li>
        <li className='md:mx-4 mt-3 md:mt-0'><Link Link to={'/all-books'}>BOOKS</Link></li>
        <li className='md:mx-4 mt-3 md:mt-0'><Link Link to={'/careers'}>CAREER </Link> </li>
        <li className='md:mx-4 mt-3 md:mt-0'><Link Link to={'/contact'}>CONTACT</Link> </li>
      </ul>
  </nav>

    </>
  )
}

export default Header