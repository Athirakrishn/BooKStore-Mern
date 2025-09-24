import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
function Home() {
  return (
    <div>
<Header/>

{/* landing */}
<div className="flex flex-col justify-center items-center text-white bg-cover bg-center bg-[url(/bg.jpg)] h-screen ">
 {/* <div style={{backgroundColor:"rgb(0,0,0,0.5)"}} className="flex flex-col justify-center items-center text-whit h-creen "> */}
    <h1 className="text-5xl font-bold"> Wonderful Gifts</h1>
    <p>Give your family and friends a book</p>
    <div className='mt-9 relative'>
      <input type="text" placeholder='Search Books'className='h-9 w-90 rounded-xl bg-white text-gray-500 '/> 
      <FontAwesomeIcon icon={faMagnifyingGlass} className='absolute right-5 top-3 text-blue-400'/>
  </div>
 </div>
{/* </div> */}
{/* arrival */}
<section className='md:px-40 flex flex-col justify-center items-center p-5 '>
  <h1 className='text-2xl'> NEW ARRIVALS</h1>
  <h1 className='text-xl'>Explore Our Largest Collection</h1>
  <div className='md:grid grid-cols-4 w-full mt-5 justify-center items-center '>
 <div className="p-3">
  <div className="shadow">
    <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-full' />
    <div className="flex flex-col justify-center items-center">
      <p className='text-blue-700 font-bold'>Author</p>
      <p >Book Title</p>
       <p>₹566</p>
    </div>
    
  </div>
 </div>
</div>
 <div className="text-center my-5">
      <Link to={'/all-books'} className='bg-blue-600 p-3'>Explore More</Link>
    </div>
</section>
{/* author */}
<section className='md:grid grid-cols-2 items-center gap-2 my-5 md:px-40 p-5'>

  <div className="text-center">
    <h1 className='text-lg font-medium'>FEATURED AUTHOR</h1>
    <h1 className='text-xl '>captive with every word</h1>
  
      <p className='text-justify '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eum maiores aut? Similique amet doloribus voluptas nisi. Minus, eius. Obcaecati earum ab accusantium cupiditate minus error a repudiandae in voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis est molestias et earum similique labore quo, omnis hic exercitationem quasi voluptates debitis amet sapiente assumenda. Distinctio voluptas deleniti adipisci.</p>
       <p className='text-justify '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eum maiores aut? Similique amet doloribus voluptas nisi. Minus, eius. Obcaecati earum ab accusantium cupiditate minus error a repudiandae in voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis est molestias et earum similique labore quo, omnis hic exercitationem quasi voluptates debitis amet sapiente assumenda. Distinctio voluptas deleniti adipisci.</p>
        <p className='text-justify '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi eum maiores aut? Similique amet doloribus voluptas nisi. Minus, eius. Obcaecati earum ab accusantium cupiditate minus error a repudiandae in voluptates! Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis est molestias et earum similique labore quo, omnis hic exercitationem quasi voluptates debitis amet sapiente assumenda. Distinctio voluptas deleniti adipisci.</p>
      
  
  
  
  
  </div>

<div className='p-5 flex justify-center items-center gap-10 my-5 md:px-40'>
  <img className='w-90' src="https://tse2.mm.bing.net/th/id/OIP.O8vv9O4Ku4HvFQyep-NXMAHaLG?pid=Api&P=0&h=180" alt="" />
</div>
</section>

{/* testimony */}
<section className='md:px-40 flex flex-col justify-center items-center p-5 '>
  <h1 className='text-2xl'> TESTMONIALS</h1>
  <h1 className='text-xl'>see what others are saying</h1>
  <div className='my-5 flex flex-col justify-center items-center'>
    <img className='w-50 h-50 rounded-50' src="https://tse2.mm.bing.net/th/id/OIP.O8vv9O4Ku4HvFQyep-NXMAHaLG?pid=Api&P=0&h=180" alt="" />
    <h4>Tessa </h4>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem ex rem, magnam commodi quidem voluptas fugit esse eius, odit vel inventore necessitatibus assumenda quos perferendis beatae, sint veritatis nemo? Quidem.</p>
  </div>
</section>
<Footer/>
    </div>
  )
}

export default Home