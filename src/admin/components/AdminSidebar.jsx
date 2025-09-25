import { faBagShopping, faBook, faCircleUser, faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AdminSidebar() {
  
  return (
    <>
    <div className=' bg-blue-100 md:w-80 w-full md:h-screen h-100 justify-center py-10'>
   <div className='flex justify-center'> <FontAwesomeIcon icon={faCircleUser} className='text-gray-700 text-center text-8xl' /></div>
           <div className='md:px-20 px-30 '>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary"><FontAwesomeIcon icon={faBook} />HOME</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary"><FontAwesomeIcon icon={faBook} />ALL BOOKS</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary"><FontAwesomeIcon icon={faBagShopping} />CAREERS </label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary"><FontAwesomeIcon icon={faScrewdriverWrench} />SETTINGS</label>
              </div>
         </div>

    </div>

    </>
  )
}

export default AdminSidebar