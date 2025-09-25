import React from 'react'
import Header from'../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot, faMailBulk, faPaperPlane, faPhone, faVoicemail } from '@fortawesome/free-solid-svg-icons'
function Contact() {
  return (
    <>
<Header/>
  <div className=" text-center items-center p-10">
    <h1 className='text-3xl font-bold my-3'>Contacts</h1>
    <p className=''> 
   Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex,ratione  aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!
   </p>
</div>
<div className="grid md:grid-cols-3 my-4 justify-evenly">
<div className="flex justify-center">
  <div className='bg-gray-300 rounded-[50%] p-3'>
    <FontAwesomeIcon icon={faLocationDot} className='text-3xl' />
  </div>
  <h1 className='p-3'>123 Main Street Apt 4B,
    CA 91234 </h1>
</div>
<div className="flex justify-center">
  <div className='bg-gray-300 rounded-[50%] p-3'>
    <FontAwesomeIcon icon={faPhone} className='text-3xl' />
  </div>
  <h1 className='p-3'>+91 234567890</h1>
</div>
<div className="flex justify-center">
  <div className='bg-gray-300 rounded-[50%] p-3'>
    <FontAwesomeIcon icon={faMailBulk} className='text-3xl' />
  </div>
  <h1 className='p-3'>BookStore@gmail.com </h1>
</div>
</div>

<div className="grid md:grid-cols-2 justify-between items-center md:px-40 p-7 my-5 ">
  <div className="justify-center  items-center py-7">
    <div className='bg-gray-300 w-100 h-72 items-center text-center rounded form-control py-5 '>
      <h1 className='text-black text-center text-xl py-2'>Send Me Message</h1>
      <input className='bg-white my-1 mx-2 rounded w-80' type="text"  placeholder='Name'/>
      <input className='bg-white my-1 mx-2 rounded w-80' type="email" placeholder='Email ID'/>
   <textarea className='bg-white my-1 mx-2 rounded w-80 ' type="textarea col-3"  placeholder='Address'/>
   <button  className='bg-black text-gray-100 my-1 mx-2 rounded w-80 '>Send < FontAwesomeIcon icon={faPaperPlane} className='text-white' /></button>
    </div> 
  </div>
  <div className="w-100 h-72">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62870.73449973762!2d76.29629185167815!3d9.982047399734459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080ffce877d5ef%3A0x8bef6870ad11b98!2sLuminar%20Technolab%20-%20Python%2C%20Data%20Science%2C%20AI%2C%20ASP.NET%2C%20Flutter%2C%20Software%20Testing%20Training%20Institute%20in%20Kochi!5e0!3m2!1sen!2sin!4v1758722389368!5m2!1sen!2sin"
    className="w-full h-full rounded-lg border-0"
  
    
  
  ></iframe>
</div>

</div>


<Footer/>
   </>
  )
}

export default Contact