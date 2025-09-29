import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'

function Profile() {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  return (
    <>
      <Header />
      <div className="bg-black " style={{ height: "200px" }}>
        <div className="bg-white p-3" style={{ width: "200px", height: "200px", borderRadius: "50%", marginLeft: "70px", marginTop: "-5px" }}>
          <img style={{ width: "200px", width: "200px", borderRadius: "50%" }} src="https://tse3.mm.bing.net/th/id/OIP.1waDZ8Q2eWBkenMscI08qAHaHa?pid=Api&P=0&h=180" alt="profile" />
        </div>
      </div>
      <div className="md:flex justify-between px-20 mt-5">
        <div className="flex items-center">
          <h1 className='font-bold md:text-3xl text-2xl'>UserName</h1>
          <FontAwesomeIcon icon={faCircleCheck} className='text-blue-400' />
        </div>
        <div>Edit</div>
      </div>
      <p className="md:px-20 px-5 text-justify">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur soluta quibusdam eos, nulla hic odio at dolor a laudantium nam. Distinctio eveniet tenetur ratione sapiente dolorum itaque error ea, nihil magni officia quasi, voluptas qui eaque architecto. Animi vel pariatur exercitationem dolore ipsam totam fuga illum quis, corrupti minus doloribus eos sunt optio itaque non velit, placeat voluptatum atque obcaecati earum. Accusantium quod atque tempore eveniet explicabo? Provident ullam modi ut ratione, quasi dolorem. Dicta dolor quos optio numquam est saepe, animi iste vitae nemo dolore aliquam corporis illo maxime, aut ea deserunt soluta alias incidunt voluptate quae adipisci velit? Modi consectetur veritatis culpa quaerat. Odio dicta ratione recusandae dolores distinctio quas fugit asperiores magnam possimus deleniti. Inventore a veritatis quas, voluptates molestiae voluptate error quibusdam
      </p>
      <div className="md:px-40">
        <div className="flex justify-center items-center">
          <p onClick={() => { setSellBookStatus(true); setPurchaseStatus(false); setBookStatus(false) }} className={sellBookStatus ? 'text-blue-500 p-4 border border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Sell Book</p>
          <p onClick={() => { setBookStatus(true); setPurchaseStatus(false); setSellBookStatus(false) }} className={bookStatus ? 'text-blue-500 p-4 border border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}> Book status</p>
          <p onClick={() => { setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false) }} className={purchaseStatus ? 'text-blue-500 p-4 border border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>purchase</p>
        </div>
        {/* content */}


        {/* sell book */}
        {
          sellBookStatus &&
          <div>
            <div className="p-10 my-20 mx-5 bg-gray-200">
              <div className="text-center text-3xl font-medium">Book Details</div>
              <div className="md:grid grid-cols-2 mt-10 w-full">
                
                <div className='px-3'>
                   <div className="mb-3 px-3">
                  <input type="text" placeholder='title' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Publisher' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Language' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className="mb-3 px-3">
                    <input type="text" placeholder='image url' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                 
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Price' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Discount Prize' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <textarea rows={5} type="text" placeholder='Abstract' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                </div>
                <div className="px-3">
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='Author' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input type="text" placeholder='No of pages' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                   <div className="mb-3 px-3">
                    <input type="text" placeholder='ISBN' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                   <div className="mb-3 px-3">
                    <input type="text" placeholder='Category' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 flex w-full justify-center">
                    <label htmlFor="bookImage">
                      <input type="file" name="" id="" className='hidden'/>
                      <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" alt="" className='w-60 h-60'/>
                    </label>
                  </div>

                </div>
{/* footer */}
<div className='flex justify-end w-220 my-4'>
                <button className=' rounded bg-green-500 text-white w-30 p-2 m-2'>Reset</button>
                <button className=' rounded bg-blue-800 text-white w-30 p-2 m-2' >Submit</button>
                  </div>
              </div>
            </div>
          </div>
        }


        {/* book status */}
        {
          bookStatus &&
          <div className="p-10 shadow my-20 rounded ">
            {/* duplicate div according to book*/}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className=".md:grid grid-cols-[3fr_1fr]">


              

</div>
            </div>
          </div>
        }

      </div>



      <Footer />
    </>
  )
}

export default Profile