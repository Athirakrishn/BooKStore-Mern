import React, { useContext } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { getHomeBooksAPI } from '../../services/allApi';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { searchBookContext } from '../../contextAPI/ContextShare'

function Home() {

  const [homeBooks,setHomeBooks] = useState([])
  const navigate = useNavigate()

 const {searchKey,setSearchKey}=useContext(searchBookContext)

  useEffect(()=>{
    getHomeBooks()
    getHomeBooks()
  },[])

  // console.log(homeBooks);
 const searchBook = ()=>{ 
  if(!searchKey){
    toast.warning("please provide book title")
  }else if(!sessionStorage.getItem("token")){
    toast.warning("please login to search books")
    setTimeout(() => {
      navigate('/login')
    }, 2500);
  }else if(sessionStorage.getItem("token")&& searchKey){
    navigate("/all-books")
  }
  else{
   toast.error("Something went wrong")
  }
 }

  const getHomeBooks = async ()=>{
    try{
      const result = await getHomeBooksAPI()
      if(result.status==200){
        setHomeBooks(result.data)
      }
    }catch(err){
      console.log(err);      
    }
  }

  return (
    <div>
<Header/>

{/* landing */}
<div className="flex flex-col justify-center items-center text-white bg-cover bg-center bg-[url(/bg.jpg)] h-screen ">
    <h1 className="text-5xl font-bold"> Wonderful Gifts</h1>
    <p>Give your family and friends a book</p>
    <div className='mt-9 relative'>
      <input onChange={e=>setSearchKey(e.target.value)} type="text" placeholder='Search Books'className='h-9 w-90 rounded-xl bg-white text-gray-500 '/> 
      <FontAwesomeIcon onClick={searchBook} icon={faMagnifyingGlass} className='absolute right-5 top-3 text-blue-400'/>
  </div>
 </div>

{/* arrival */}
      <section className='md:px-40 p-5 my-5 flex flex-col justify-center items-center'>
  <h1 className='text-2xl'> NEW ARRIVALS</h1>
  <h1 className='text-xl'>Explore Our Largest Collection</h1>
  <div className='md:grid grid-cols-4 w-full mt-5 justify-center items-center '>
   {
            homeBooks.length>0?
              homeBooks?.map((book,index)=>(
                <div key={index} className="shadow  rounded p-3 mx-4">
                  <img width={'100%'} height={'300px'} src={book?.imageUrl} alt="book" />
                  <div className="flex flex-col justify-center items-center mt-4">
                    <p className="text-blue-700 font-bold text-lg">{book?.author}</p>
                    <p >{book?.title}</p>
                    <p>$ {book?.discountPrice}</p>
                  </div>
                </div>
              ))
          :
          <p>Loading ... </p>
           }

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
  <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  )
}

export default Home