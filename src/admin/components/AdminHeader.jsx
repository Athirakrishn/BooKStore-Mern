
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function AdminHeader() {
    const [listStatus,setListStatus] = useState(false)

  return (
    <>
      <div className='flex justify-between py-2'>
        <div className='flex items-center'>
          <img src="/logo.png" alt="" className='w-12 h-12' />
          <div className='md:flex justify-center items-center md:block hidden'>
          <h1 className='text-3xl text-bold '>BOOKSTORE</h1>
        </div>
        </div>
        {/* logout */}
        <Link to={'/'} className='flex border rounded p-1 w-30 text-center text-xl'><FontAwesomeIcon icon={faPowerOff} className=' p-2 text-blue-900' /> Logout</Link>
      </div>
        <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center '>
    {/* menubar and login */}
    <div className="flex justify-between text-2xl items-center md:hidden ">
      <button  onClick={()=>setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} /></button>
      {/* logout link */}
      
          <Link to={'/'}> <button className='border border-black rounded px-3 py-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faPowerOff} className='me-2' /> Logout</button> </Link>
 
    </div>
      <marquee className={listStatus?"flex flex-col":"justify-center md:flex items-center hidden"}>
    Welcome,  Admin!    You're all set to manage and monitor the system. Let’s get to work!
      </marquee>
  </nav>



    </>
  )
}

export default AdminHeader