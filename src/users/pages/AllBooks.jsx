import React from 'react'
import header from '../components/Header'
import Footer from '../../components/Footer'
import Header from '../components/Header'
function AllBooks() {
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
        <div className="grid grid-cols-3 p-3">
          <div className="col-span-1">
            <h1 className='text-2xl font-semibold'>Filter</h1>
            <div className="mt-3">
              <input type="radio" id='literary' name='filter' />
              <label className='m' htmlFor="literary">literary</label>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </>
  )
}

export default AllBooks