
import { faFacebook, faInstagram, faTwitter, faUber } from '@fortawesome/free-brands-svg-icons'
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [listStatus, setListStatus] = useState(false)
  const [token, setToken] = useState("")
  const [userDp, setUserDp] = useState("")
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      setToken(token)
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDp(user.profile)

    }
  })
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
            <div>
              <button>
                <img width={'40px'} height={''} src={userDp == "" ? "https://thumb.ac-illust.com/51/51e1c1fc6f50743937e62fca9b942694_t.jpeg" : ""} alt="user" />
              </button>
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