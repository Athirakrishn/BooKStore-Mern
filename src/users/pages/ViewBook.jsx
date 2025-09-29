import React, { useState } from 'react'
import Header  from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function ViewBook() {
  const [modalStatus,setModalStatus] = useState(false)
  return (
    <>
<Header/>
<div className="md:m-10 m-5">
<div className="border p-5 shadow border-gray-200">
  <div className="md:grid grid-cols-4">
 <div className="grid-span-1">
  <img className='w-full' src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="" />
 </div>
 <div className="col-span-3 mx-5">
  <div className="m-5 flex justify-between">
    <h1 className='text-xl font-bold'>Title</h1>
    <button onClick={()=>setModalStatus(true)}> <FontAwesomeIcon icon={faEye} className='text-gray-400'/></button>
  </div>
  
    <p className='my-3 text-blue-700'>-Author</p>
<div className='md:grid grid-cols-3 gap-5 my-10'>
      <p className="font-bold">publisher : demo</p>
      <p className="font-bold">Language : demo</p>
      <p className="font-bold">No of pages : demo</p>
      <p className="font-bold">Seller Mail : demo</p>
      <p className="font-bold">Real Prize : demo</p>
      <p className="font-bold">ISBN Prize : demo</p>
</div>
 
<div className="md:my-10 my-4">
  <p className='font-bold text-lg'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse ab alias recusandae iusto reprehenderit, rem nam, praesentium vero cumque libero aliquam officia in. Consectetur, laborum vel exercitationem cumque nostrum incidunt!</p>

</div>
<div className=' flex justify-end px-3'>
  <Link to={'/all-books'} className='bg-blue-900 text-white p-2 rounded'>< FontAwesomeIcon icon={faBackward} className='me-3'/>Back</Link>
  <button className='bg-green-900 text-white p-2 rounded'>Buy $123</button>  
</div>
 </div>
  </div>
</div>
</div>
{/* modal */}
{ modalStatus && <div className='relative z-10 ' onClick={()=>setModalStatus(false)}>
<div className="bg-gray-500/75 fixed inset-0 transition-opacity">
<div className="justify-center flex items-center md:min-h-screen">
<div className='bg-white text-black md:h-100 md:w-200 w-100 rounded'>
  <div className='bg-black text-white flex justify-between items-center p-3'>
    <h3>Books Images</h3>
    <FontAwesomeIcon icon={faXmark} onClick={()=>setModalStatus(false)}/>
  </div>
  <p className='text-blue-600 my-5 ml-5'>
    <FontAwesomeIcon icon={faCamera} className='me-2'/>
    Camera click of the book in the hand of seller
  </p>

  <div className="md-flex flex-cols-3 flex-wrap my-4">
  {/* duplicate images */}
  <img className=''  style={{width:"250px",height:"250px"}} src=" https://images.pexels.com/photos/1130980/pexels-photo-1130980.jpeg?cs=srgb&dl=assortment-book-bindings-books-1130980.jpg&fm=jpg" alt="book images" />

  </div>
</div>
</div>
</div>
</div>}
<Footer/>

    </>
  )
}

export default ViewBook