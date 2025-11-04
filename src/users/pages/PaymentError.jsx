import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

function PaymentError() {
  return (
    <>
          <Header />
   <div className="container my-10">
    <div className="md:grid grid-cols-2 px-20 justify-center items-center">
          <div>
            <h1 className='md:text-4xl text-red-600'>Sorry you payment is unsuccessful </h1>
          <p className="text-2xl my-4">We apologies to the inconvenience caused and appetite you visit</p>
          <Link to={'/all-books'}  className="py-2 px-3 rounded bg-gray-600 text-white "> <FontAwesomeIcon  icon={faBackward}/> Explore more</Link>
          </div>
          <div className='flex justify-center items-center'>
            <img src="https://easyfashion.com.bd/wp-content/uploads/2021/04/payment-failed-min.gif" alt="faild" />
          </div>
    </div>
   </div>
      <Footer />
    </>
  )
}

export default PaymentError