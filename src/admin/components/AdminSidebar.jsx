import { faBagShopping, faBars, faBook, faCircleUser, faHome, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { adminUpdateContext } from '../../contextAPI/ContextShare'
import SERVERURL from '../../services/serverUrl'

function AdminSidebar() {
      const [listStatus,setListStatus] = useState(false)
      const{adminEditResponse,setAdminEditResponse}= useContext(adminUpdateContext)  
      const [dp,setDp]=useState("")
      const[adminName,setAdminName]=useState("")
      
      useEffect(()=>{
          if(sessionStorage.getItem("user")){
          const user = JSON.parse(sessionStorage.getItem("user"))
          setDp(user.profile)
          setAdminName(user.username)
          }
      },[adminEditResponse])

  return (
    <>
    <div className=' bg-blue-100 md:w-80 w-full md:h-200 md:flex flex-col  py-10 '>
   <div className='flex justify-center'> <img src={dp==""?"https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png":`${SERVERURL}/uploads/${dp}`} alt='user' className='text-gray-700 text-center text-8xl' />
   </div>
    <h1 className='fond-semibold text-center'>{adminName}</h1>
  <div className="md:hidden flex justify-center text-2xl items-center  ">
      <button onClick={()=>setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} className='text-blue-600 text-center py-5'/></button>
  
    </div> 
           <div className={listStatus ? 'md:px-20 px-30 block ':'md:block hidden'}>
              <div className="mt-3">
                <Link to={'/admin-dashboard'} className='ms-3' htmlFor="literary"><FontAwesomeIcon icon={faHome} />HOME</Link>
              </div>
              <div className="mt-3">
                <Link to={'/admin-resource'} className='ms-3' htmlFor="literary"><FontAwesomeIcon icon={faBook} />ALL BOOKS</Link>
              </div>
              <div className="mt-3">
                <Link to={'/admin-careers'} className='ms-3' htmlFor="literary"><FontAwesomeIcon icon={faBagShopping} />CAREERS </Link>
              </div>
              <div className="mt-3">
                <Link to={'/admin-settings'} className='ms-3' htmlFor="literary"><FontAwesomeIcon icon={faScrewdriverWrench} />SETTINGS</Link>
              </div>
         </div>

    </div>

    </>
  )
}

export default AdminSidebar