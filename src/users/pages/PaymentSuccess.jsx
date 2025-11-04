import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'

function PaymentSuccess() {
  return (
    <>
      <Header />
   <div className="container my-10">
    <div className="md:grid grid-cols-2 px-20 justify-center items-center">
          <div>
            <h1 className='md:text-4xl text-blue-600'>congratulations </h1>
          <p className="text-2xl my-4">Thank you for purchasing with Bookstore. Hope you have a good time with us...</p>
          <Link to={'/all-books'}  className="py-2 px-3 rounded bg-gray-600 text-white "> <FontAwesomeIcon  icon={faBackward}/> Explore more</Link>
          </div>
          <div className='flex justify-center items-center'>
            <img src="https://i.pinimg.com/originals/94/96/e7/9496e7d9729e14408f0e21272e8885c7.gif" alt="Success" />
          </div>
    </div>
   </div>
      <Footer />
    </>
  )
}

export default PaymentSuccess