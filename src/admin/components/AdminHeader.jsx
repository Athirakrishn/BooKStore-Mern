
import { faBars, faPowerOff } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { userAuthContext } from '../../contextAPI/AuthContext'
function AdminHeader() {
  const navigate = useNavigate()
   const {role,authorisedUser,setAuthorisedUser} = useContext(userAuthContext)
  


  const logOut=()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    navigate('/')
  }


  return (
    <>
      <div className='flex justify-between py-2'>
        <div className='flex items-center'>
          <img src="/logo.png" alt="" className='w-12 h-12' />
          <div className='md:flex justify-center items-center md:block'>
          <h1 className='text-3xl text-bold '>BOOKSTORE</h1>
        </div>
        </div>
        {/* logout */}
        <div onClick={logOut} className='flex border rounded p-1 w-30 text-center text-xl'><FontAwesomeIcon icon={faPowerOff} className=' p-2 text-blue-900' /> Logout</div>
      </div>
        <nav className='w-full p-3 bg-black text-white md:flex justify-center items-center '>
  
      <marquee className="justify-center text-white md:flex items-center ">
    Welcome,  Admin! You're all set to manage and monitor the system. Let’s get to work!
      </marquee>
  </nav>



    </>
  )
}

export default AdminHeader