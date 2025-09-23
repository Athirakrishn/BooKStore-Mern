import React from 'react'
import Header from '../components/Header'
import Footer from './../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
function Home() {
  return (
    <div>
<Header/>

{/* landing */}
<div className="flex flex-col justify-center items-center text-white bg-cover bg-center bg-[url(/bg.jpg)] h-screen ">
<h1 className="text-5xl font-bold"> Wonderful Gifts</h1>
<p>Give your family and friends a book</p>
<div className='mt-9 relative'>
  <input type="text" placeholder='Search Books'className='h-9 w-90 rounded-xl bg-white text-gray-500 '/> 
  <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-5 top-3 text-blue-400'/>

</div>
</div>
{/* arrival */}
<div className='flex flex-col justify-center items-center '>
  <h1 className='text-2xl'> NEW ARRIVALS</h1>
  <p className='text-xl'>Explore Our Largest Collection</p>
  <div className='flex justify-center items-center '>

</div>
</div>
{/* author */}
{/* testimony */}
<Footer/>
    </div>
  )
}

export default Home