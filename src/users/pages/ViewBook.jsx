import React from 'react'
import Header  from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faEye } from '@fortawesome/free-solid-svg-icons'

function ViewBook() {
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
    <button> <FontAwesomeIcon icon={faEye} className='text-gray-400'/></button>
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
  <button className='bg-blue-900 text-white p-2 rounded'>< FontAwesomeIcon icon={faBackward} className='me-3'/>Back</button>
  <button className='bg-green-900 text-white p-2 rounded'>Buy $123</button>  
</div>
 </div>
  </div>
</div>
</div>
<Footer/>

    </>
  )
}

export default ViewBook