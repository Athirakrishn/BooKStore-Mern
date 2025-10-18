
import { faFacebook, faInstagram, faTwitter, faUber } from '@fortawesome/free-brands-svg-icons'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faBars, faPowerOff, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Header() {
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [userDp, setUserDp] = useState("")
  const [dropDownStatus,setDropDownStatus] = useState(false)
  const navigate = useNavigate()
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile)
    }
  },[token])
// logout
const logOut = ()=>{
  sessionStorage.clear()
  setToken("")
  setUserDp("")
  setDropDownStatus(false)
  navigate('/') 
}
  return (
    <>
      <div className="grid grid-cols-3 p-3">
        {/* logo */}
        <div className='flex items-center'>
          <img src="/logo.png" alt="" className='w-12 h-12' />
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
          {!token ? <Link to={'/login'}> <button className='border border-black rounded px-3 py-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} className='me-2' /> Login</button> </Link>
            :
            <div className="relative inline-block text-left">
       
                <button 
                onClick={()=>setDropDownStatus(!dropDownStatus)}
                className='inline-flex w-full items-center justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs hover:bg-gray-50'>
                  <img width={'40px'} height={'40px'} style={{borderRadius:'50%'}} className='mx-2' src={userDp == "" ? "https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg" : userDp} alt="user" />
               
                </button>
              { dropDownStatus && <div className='absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-hidden '>
                <div className="py-1 ">
                  <Link className='block px-2 py-2 text-sm text-gray-700' to={'/profile'}> <FontAwesomeIcon icon={faAddressCard} className='me-2'/> Profile
                  </Link>
                  <button onClick={logOut} className='block px-2 py-2 text-sm text-gray-700'><FontAwesomeIcon icon={faPowerOff} className='me-2'/>Logout</button>
                </div>
               </div>}

             </div>
           
          }
        </div>

      </div>
      <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center '>
        {/* menubar and login */}
        <div className="flex justify-between text-2xl items-center md:hidden ">
          <button onClick={() => setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} /></button>
          {/* login link */}
          {/* login link   */}
          <Link to={'/login'}> <button className='border border-black rounded px-3 py-3 hover:bg-black hover:text-white'><FontAwesomeIcon icon={faUser} className='me-2' /> Login</button> </Link>

        </div>
        <ul className={listStatus ? "flex flex-col" : "justify-center md:flex items-center hidden"}>
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