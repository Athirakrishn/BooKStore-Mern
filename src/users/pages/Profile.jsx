import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'

function Profile() {
  const [sellBookStatus, setSellBookStatus] = useState(true)
  const [bookStatus, setBookStatus] = useState(false)
  const [purchaseStatus, setPurchaseStatus] = useState(false)
  const [bookDetails, setBookDetails] = useState({
    title: "", author: "", noOfPages: "", imageUrl: "", price: "", discountPrice: "", abstract: "", publisher: "", languages: "", isbn: "", category: "", uploadImages: []
  })
  console.log(bookDetails);
  const [preview, setPreview] = useState("")
  const [previewList, setPreviewList] = useState([])

  const handleUploadBookImage = (e) => {
    // console.log(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0])
    // console.log(url);
    const fileArray = bookDetails.uploadImages
    fileArray.push(e.target.files[0])
    setBookDetails({ ...bookDetails, uploadImages: fileArray })
    setPreview(url)
    const bookImgArray = previewList
    bookImgArray.push(bookImgArray)
  }

  return (
    <>
      <Header />
      <div className="bg-black " style={{ height: "180px" }}>
      </div>
      <div className="bg-white p-3" style={{ width: "200px", height: "200px", borderRadius: "50%", marginLeft: "70px", marginTop: "-110px" }}>
        <img style={{ width: "200px", width: "200px", borderRadius: "50%" }} src="https://tse3.mm.bing.net/th/id/OIP.1waDZ8Q2eWBkenMscI08qAHaHa?pid=Api&P=0&h=180" alt="profile" />
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
                    <input value={bookDetails.title} onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" placeholder='title' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input value={bookDetails.publisher} onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" placeholder='Publisher' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className="mb-3 px-3">
                    <input value={bookDetails.languages} onChange={e => setBookDetails({ ...bookDetails, languages: e.target.value })} type="text" placeholder='Language' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className="mb-3 px-3">
                    <input value={bookDetails.imageUrl} onChange={e => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} type="text" placeholder='image url' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                  <div className="mb-3 px-3">
                    <input value={bookDetails.price} onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" placeholder='Price' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input value={bookDetails.discountPrice} onChange={e => setBookDetails({ ...bookDetails, discountPrice: e.target.value })} type="text" placeholder='Discount Prize' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <textarea value={bookDetails.abstract} onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} rows={5} type="text" placeholder='Abstract' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>

                </div>
                <div className="px-3">
                  <div className="mb-3 px-3">
                    <input value={bookDetails.author} onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" placeholder='Author' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input value={bookDetails.noOfPages} onChange={e => setBookDetails({ ...bookDetails, noOfPages: e.target.value })} type="text" placeholder='No of pages' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input value={bookDetails.isbn} onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" placeholder='ISBN' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 px-3">
                    <input value={bookDetails.category} onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" placeholder='Category' className='w-full p-2  rounded placeholder-gray-400 text-black bg-white' />
                  </div>
                  <div className="mb-3 flex w-full justify-center">
                    <label className="flex justify-center items-center mt-10" htmlFor="bookImage">
                      <input
                        onChange={(e) => handleUploadBookImage(e)}
                        type="file"
                        name="bookImage"
                        id="bookImage"
                        className="hidden"
                      />
                      {!preview ? <img
                        src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png"
                        width="200px"
                        height="200px"
                        alt="book image" />
                        :
                        <img
                          src={preview}
                          width="200px"
                          height="200px"
                          alt="book image" />
                      }

                    </label>


                  </div>
                  {preview && <div className=" flex w-full justify-center">
                    {
                      previewList?.map(imgUrl => (
                        <img src={imgUrl} width="70px" height="7px" alt="book image" className='hidden'  />
                      ))
                    }
                    { previewList.length>3 &&
                     <label className="flex justify-center items-center" htmlFor="bookImage">
                      <input onChange={(e) => handleUploadBookImage(e)} type="file" name="bookImage" id="bookImage" className="hidden" />
                      <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow text-gray-500' />

                    </label>}


                  </div>}

                </div>
                {/* footer */}
                <div className='flex mdjustify-end w-220 my-4'>
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
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className='text-xl'>Author</h2>
                  <h3 className="text-lg text-blue-500">$399</h3>
                  <div className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, numquam a? Laudantium molesti doloremque dolores possimus sint minima mollitia. Eos esse velit est veniam, incidunt sequi commodi doloribus illum hic ducimus dicta vel.</div>
                  <div className="flex mt-3">
                    <img src='https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png' alt='pending' className='w-30 h-30'></img>
                    <img src='https://pngimg.com/uploads/approved/approved_PNG1.png' alt='approved' className='w-24 h-24'></img>
                  </div>

                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className='h-60 w-40' src="https://tse1.mm.bing.net/th/id/OIP.TNXyaAG3BpbDHMFeOuVchQHaE7?pid=Api&P=0&h=180" alt="book" />
                  <div className="mt-4 flex justify-end">
                    <button className='py-2 px-3 bg-red-600 text-white ms-3 hover:bg-white hover:border hover:text-red-600 hover:border-red-600'>Delete</button>

                  </div>
                </div>




              </div>
            </div>
          </div>
        }
        {/* purchase */}
        {
          purchaseStatus &&
          <div className="p-10 shadow my-20 rounded ">
            {/* duplicate div according to book*/}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className='text-xl'>Author</h2>
                  <h3 className="text-lg text-blue-500">$399</h3>
                  <div className="text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, numquam a? Laudantium molesti doloremque dolores possimus sint minima mollitia. Eos esse velit est veniam, incidunt sequi commodi doloribus illum hic ducimus dicta vel.</div>
                  <div className="flex mt-3">

                    <img src='https://www.pngmart.com/files/7/Sold-PNG-Photo.png' alt='approved' className='w-24 h-24'></img>
                  </div>

                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className='h-60 w-40' src="https://tse1.mm.bing.net/th/id/OIP.TNXyaAG3BpbDHMFeOuVchQHaE7?pid=Api&P=0&h=180" alt="book" />
                </div>

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