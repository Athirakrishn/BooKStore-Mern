import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBackward, faCamera, faEye, faXmark } from '@fortawesome/free-solid-svg-icons'
import { Link, useParams } from 'react-router-dom'
import { getSingleBooksAPI } from '../../services/allApi'
import { ToastContainer, toast } from 'react-toastify';
import SERVERURL from '../../services/serverUrl'
import {loadStripe} from '@stripe/stripe-js';

function ViewBook() {
  const [modalStatus, setModalStatus] = useState(false)
  const { id } = useParams()
  const [book, setBook] = useState({})
  console.log(book);
  useEffect(() => {
    ViewBookDetails()
  }, [])

  const ViewBookDetails = async () => {
    const token = sessionStorage.getItem("token")
    if (token) {
      const reqHeader = {
        "Authorization": `Bearer ${token}`
      }
      try {
        const result = await getSingleBooksAPI(id, reqHeader)
        if (result.status == 200) {
          setBook(result.data)
        } else if (result.response.status == 401) {
          toast.warning(result.response.data)
        } else {
          console.log(result);

        }

      } catch (err) {
        console.log(err);

      }
    }
  }

  //payment
 const handlePayment = async()=>{
  console.log("inside handle payment");
  //stripe object
  const stripe = await loadStripe('pk_test_51SPbdoGaflwvq4TvAEswVmvPp3RX5GmM5mBtm4KOKTQL9pmnpw1uTdJRvy3kX5X2m6sM1Fb7fcfg1RnWiXmt4Wi400RxsvELdC');
//  console.log(stripe);
 
 }

  return (
    <>
      <Header />
      <div className="md:m-10 m-5">
        <div className="border p-5 shadow border-gray-200">
          <div className="md:grid grid-cols-4">
            <div className="grid-span-1">
              <img className='w-full' src={book?.imageUrl} alt="" />
            </div>
            <div className="col-span-3 mx-5">
              <div className="m-5 flex justify-between">
                <h1 className='text-xl font-bold'>{book?.title}</h1>
                <button onClick={() => setModalStatus(true)}> <FontAwesomeIcon icon={faEye} className='text-gray-400' /></button>
              </div>

              <p className='my-3 text-blue-700'>{book?.author}</p>
              <div className='md:grid grid-cols-3 gap-5 my-10'>
                <p className="font-bold">publisher : {book?.publisher}</p>
                <p className="font-bold"> Language :{book?.languages} </p>
                <p className="font-bold">No of pages : {book?.noOfPages} </p>
                <p className="font-bold">Seller Mail :{book?.userMail} </p>
                <p className="font-bold">Price : {book?.price}</p>
                <p className="font-bold">isbn : {book?.isbn}</p>
                 <p className="font-bold">Category : {book?.category}</p>

              </div>

              <div className="md:my-10 my-4">
                <p className='font-bold text-lg'> {book?.abstract}</p>

              </div>
              <div className=' flex justify-end px-3'>
                <Link to={'/all-books'} className='bg-blue-900 text-white p-2 rounded'>< FontAwesomeIcon icon={faBackward} className='me-3' />Back</Link>
                <button onClick={handlePayment} className='bg-green-900 text-white p-2 rounded'>Buy $123</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
      {modalStatus && <div className='relative z-10 ' onClick={() => setModalStatus(false)}>
        <div className="bg-gray-500/75 fixed inset-0 transition-opacity">
          <div className="justify-center flex items-center md:min-h-screen">
            <div className='bg-white text-black md:h-100 md:w-200 w-100 rounded'>
              <div className='bg-black text-white flex justify-between items-center p-3'>
                <h3>Books Images</h3>
                <FontAwesomeIcon icon={faXmark} onClick={() => setModalStatus(false)} />
              </div>
              <p className='text-blue-600 my-5 ml-5'>
                <FontAwesomeIcon icon={faCamera} className='me-2' />
                Camera click of the book in the hand of seller
              </p>

              <div className="md:flex flex-wrap my-4  overflow-y-auto ">
                {/* duplicate images */}
                {
                  book?.uploadImg?.length > 0 ?
                    book?.uploadImg?.map(img => (
                      <img width={'160px'} height={'160px'} className='mx-2' src={`${SERVERURL}/uploads/${img}`}
                        alt="book-images" />

                    ))
                    :
                    <p>User uploaded book images are unavailable..</p>
                }



              </div>
            </div>
          </div>
        </div>
      </div>}
      <Footer />
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

    </>
  )
}

export default ViewBook