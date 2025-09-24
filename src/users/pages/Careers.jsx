import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons'
function Careers() {
  return (
   <>
    <>
<Header/>
  <div className=" text-center items-center p-10">
    <h1 className='text-3xl my-3'>Careers</h1>
    <p>
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex,ratione  aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!
   </p>
</div>
<h1 className='m-4'>Current openings</h1>
<div className="grid grid-cols-2 justify-center items-center text-center md:w-200 w-100">
  <input type="text" placeholder='Job Title' className='h-10' />
  <button className='text-white bg-green-600 md:w-50 w-30 h-10'>Search </button>
</div>

<div className="justify-center items-center mx-40 shadow h-70 bg-gray-300 ">
<div className='grid grid-cols-2 justify-between'>
   <h1 className='p-7'>Job Title</h1>
   <div className='bg-blue-700 w-40 h-10 rounded m-7'>
       <h1 className='text-white'>Apply</h1> <FontAwesomeIcon icon={faArrowsLeftRight} className='text-3xl text-white' />

   </div>
   </div>
<hr className='w-100 mx-10'/>
</div>




<Footer/>
   </>
  
   </>
  )
}

export default Careers