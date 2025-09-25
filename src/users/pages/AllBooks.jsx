import React, { useState } from 'react'
import header from '../components/Header'
import Footer from '../../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function AllBooks() {
    const [listStatus,setListStatus] = useState(false)
  
  return (
    <>
      <Header />
      <>
        <div className="flex justify-center items-center flex-col my-5">
          <h1 className='text-3xl'>Collections</h1>
          <div className='flex my-5'>
            <input type="text" className='p-2 rounded border border-gray-200 text-black w-100' />
          </div>
          <button className=' p-2 text-white bg-blue-500'>Search</button>
        </div>
        {/* grid */}
        <div className="md:grid grid-cols-3 md:px-20 p-3">
          {/* fillter */}
          <div className="col-span-1 ">
           <div className='flex justify-between'>
              <h1 className='text-2xl font-semibold'>Filter</h1>
             <button  onClick={()=>setListStatus(!listStatus)} ><FontAwesomeIcon icon={faBars} className='text-2xl md:hidden'/></button>
           </div>

         <div className={listStatus?'block':'md:block hidden'}>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">literary fiction</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">literary fiction</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">literary fiction</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Philosophy</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">thriller</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Romance </label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Politics</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">Horror</label>
              </div>
              <div className="mt-3">
                <input type="radio" id='literary' name='filter' />
                <label className='ms-3' htmlFor="literary">No-filter</label>
              </div>
  
         </div>
          </div>

          <div className="col-span-2">
            <div className="md:grid  grid-cols-4 justify-center">
              {/* <div className="p-3 w-80 justify-center items-center"> */}
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
                
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default AllBooks