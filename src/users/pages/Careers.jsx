import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight, faLocationDot, faSquareArrowUpRight } from '@fortawesome/free-solid-svg-icons'
function Careers() {
  return (
   <>
    <>
<Header/>
  <div className='my-5'>
      <div className=" text-center justify-center items-center p-5  md:mx-50">
        <h1 className='text-3xl my-3 font-bold'>Careers</h1>
        <p className=' '>
       Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex,ratione  aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!
       </p>
    </div>
    <h1 className='m-4 bold text-xl md:mx-50'>Current openings</h1>
    <div className="md:mx-80 grid grid-cols-2 justify-center items-center text-center md:w-200 w-100">
      <input type="text" placeholder='Job Title' className='h-10' />
      <button className='text-white bg-green-600 md:w-50 w-30 h-10'>Search </button>
    </div>
    
    <div className=" md:mx-45 bg-white shadow rounded p-5">
                <div className="flex justify-between items-center border-b pb-2 mb-4">
                  <h3 className="font-semibold text-lg">Job Title</h3>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1">
                    Apply
                  <FontAwesomeIcon size='2x' icon={faSquareArrowUpRight} /></button>
                </div>
    
                {/* Job Details */}
                <div className="space-y-2 text-sm text-gray-700">
                  <p className="flex items-center gap-2">
                    <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" /> Location
                  </p>
                  <p>
                    <span className="font-semibold">Job Type:</span> Senior Level
                  </p>
                  <p>
                    <span className="font-semibold">Salary:</span> 10 lakhs
                  </p>
                  <p>
                    <span className="font-semibold">Qualification:</span> M-Tech /B-Tech/BCA/MCA
                  </p>
                  <p>
                    <span className="font-semibold">Experience:</span> 5-7
                  </p>
                </div>
    
                {/* Description */}
                <p className="mt-4 text-gray-600 text-sm ">
                  Description : Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
              </div>
  </div>


          
       




<Footer/>
   </>
  
   </>
  )
}

export default Careers