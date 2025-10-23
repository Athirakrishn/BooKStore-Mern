import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleCheck, faL } from '@fortawesome/free-solid-svg-icons'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import { ToastContainer,toast } from 'react-toastify';
import { addBookAPI } from '../../services/allAPI'

const Profile = () => {
  const [sellBookStatus,setSellBookStatus] = useState(true)
  const [bookStatus,setBookStatus] = useState(false)
  const [purchaseStatus,setPurchaseStatus] = useState(false)
  const [bookDetails,setBookDetails] = useState({
    title:"",author:"",noOfPages:"",imageUrl:"",price:"",discountPrice:"",abstract:"",publisher:"",languages:"",isbn:"",category:"",uploadImages:[]
  })
  // console.log(bookDetails);
  const [preview,setPreview] = useState("")
  const [previewList,setPreviewList] = useState([])
  const [token,setToken] = useState("")
 

  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
  },[])

  const handleUploadBookImage = (e)=>{
    // console.log(e.target.files[0]);
    const fileArray = bookDetails.uploadImages
    fileArray.push(e.target.files[0])
    setBookDetails({...bookDetails,uploadImages:fileArray})
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
    // console.log(url);
    const bookImgArray = previewList
    bookImgArray.push(url)
    setPreviewList(bookImgArray)
  }

  const handleReset = ()=>{
    setBookDetails({
      title:"",author:"",noOfPages:"",imageUrl:"",price:"",discountPrice:"",abstract:"",publisher:"",languages:"",isbn:"",category:"",uploadImages:[]
    })
    setPreview("")
    setPreviewList([])
  }

  const handleBookSubmit = async()=>{
    const {title,author,noOfPages,imageUrl,price,discountPrice,abstract,publisher,languages,isbn,category,uploadImages} = bookDetails

    if(!title || !author || !noOfPages || !imageUrl || !price || !discountPrice || !abstract || !publisher || !languages || !isbn || !category || uploadImages.length == 0){
      toast.info("Please fill the form!!!")
    }else{
      //api call
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const reqBody = new FormData()
      //append : reqBody.append(key,value)
      for(let key in bookDetails){
        if(key != "uploadImages"){
          reqBody.append(key,bookDetails[key])
        }else{
          bookDetails.uploadImages.forEach(img=>{
            reqBody.append("uploadImages",img)
          })
        }
      }
      try{
        const result = await addBookAPI(reqBody,reqHeader)
        console.log(result);
        if(result.status == 401){
          toast.warning(result.response.data)
          //clear all field
          handleReset()
        }else if(result.status==200){
          toast.success("Book added successfully!!!")
          //clear all field
           handleReset()
        }else{
          toast.error('Something went wrong!!!')
          //clear all field
           handleReset()
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  
  return (
    <>
    <Header/>
    <div style={{height:'200px'}} className="bg-black"></div>
    <div style={{width:'230px',height:'230px',borderRadius:'50%',marginLeft:'70px',marginTop:'-130px'}} className="bg-white p-3">
      <img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="profile" />
    </div>
    <div className="md:flex justify-between px-20 mt-5">
      <div className="flex  items-center">
        <h1 className="font-bold md:text-3xl text-2xl">Username</h1>
        <FontAwesomeIcon className='text-blue-400 ms-3 ' icon={faCircleCheck}/>
      </div>
      <div>Edit</div>
    </div>
    <p className="md:px-20 px-5 my-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque excepturi ex delectus accusantium nemo, perspiciatis pariatur quo explicabo facilis sed blanditiis, ullam neque labore expedita qui itaque unde, repudiandae esse.
    Dignissimos, officia aut suscipit quo magni soluta commodi iste neque architecto, error, eaque exercitationem incidunt iure molestiae voluptatem quasi inventore culpa ipsam! Repellendus beatae adipisci cupiditate reiciendis non saepe fuga.</p>
    <div className="md:px-40">
      {/* tabs */}
      <div className="flex justify-center items-center my-8 font-medium text-lg">
        <p onClick={()=>{setSellBookStatus(true); setPurchaseStatus(false); setBookStatus(false)}} className={sellBookStatus ? 'text-blue-500 p-4  border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4  border-b border-gray-200 cursor-pointer'}>Sell Books</p>
        <p onClick={()=>{setBookStatus(true); setPurchaseStatus(false); setSellBookStatus(false)}} className={bookStatus   ? 'text-blue-500 p-4  border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4  border-b border-gray-200 cursor-pointer'}>Book Status</p>
        <p onClick={()=>{setPurchaseStatus(true); setSellBookStatus(false); setBookStatus(false)}} className={purchaseStatus ? 'text-blue-500 p-4  border-gray-200 border-t border-l border-r rounded cursor-pointer':'p-4  border-b border-gray-200 cursor-pointer'}>Purchase History</p>
      </div>
      {/* contents */}
      {/* Sell Books */}
      {
        sellBookStatus &&
        <div>
          <div  className="p-10 my-20 mx-5 bg-gray-200">
            <div className="text-center text-3xl font-medium">Book Details</div>
            <div className="md:grid grid-cols-2 mt-10 w-full">
              <div className='px-3'>
                <div className="mb-3 ">
                  <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder='Title' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3">
                  <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" placeholder='Author' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3">
                  <input value={bookDetails.noOfPages} onChange={e=>setBookDetails({...bookDetails,noOfPages:e.target.value})} type="text" placeholder='No. of Pages' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3">
                  <input value={bookDetails.imageUrl} onChange={e=>setBookDetails({...bookDetails,imageUrl:e.target.value})} type="text" placeholder='Image URL' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3">
                  <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text" placeholder='Price' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3">
                  <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" placeholder='Discount Price' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3">
                  <textarea value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} placeholder='Abstract' name="" id="" rows={'5'} className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" ></textarea>
                </div>
              </div>
              <div className="px-3">
                
                <div className="mb-3">
                  <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" placeholder='Publisher' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3">
                  <input value={bookDetails.languages} onChange={e=>setBookDetails({...bookDetails,languages:e.target.value})} type="text" placeholder='languages' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                 <div className="mb-3">
                  <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} type="text" placeholder='ISBN' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3">
                  <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})} type="text" placeholder='Category' className="w-full p-2  rounded placeholder-gray-400 text-black bg-white" />
                </div>
                <div className="mb-3 flex justify-center items-center mt-10">
                  <label htmlFor="bookImage">
                    <input onChange={e=>handleUploadBookImage(e)} type="file" name="" id="bookImage" className='hidden'/>
                    { !preview ?
                      <img src="https://cdn.pixabay.com/photo/2016/01/03/00/43/upload-1118929_1280.png" width={'200px'} height={'200px'} alt="book" />
                    :
                    <img src={preview} width={'200px'} height={'200px'} alt="book" />
                    }
                  </label>
                </div>
                {preview && <div className=" flex justify-center items-center ">
                  {
                    previewList?.map((imgUrl,index)=>(
                      <img key={index} src={imgUrl} width={'70px'} height={'70px'} alt="book" className='mx-3' />
                    ))
                  }
                  { previewList.length<3 && <label htmlFor="bookImages">
                    <input onChange={e=>handleUploadBookImage(e)} type="file" name="" id="bookImages" className='hidden'/>
                    <FontAwesomeIcon icon={faSquarePlus} className='fa-2x shadow ms-3 text-gray-500'/>
                  </label>}
                </div>}
              </div>
            </div>
            {/* footer */}
            <div className=" p-3   w-full flex md:justify-end justify-center  mt-8">
                <button onClick={handleReset} className="py-2 px-3 rounded bg-gray-600 text-white hover:bg-white hover:border hover:text-black">Reset</button>
                <button onClick={handleBookSubmit} className="py-2 px-3 rounded bg-blue-900 text-white ms-3 hover:bg-white hover:border hover:text-blue-600 hover:border-blue-600">Submit</button>
            </div>
          </div>
        </div>
      }
      {/* book status */}
      {
        bookStatus &&
        <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div accordign to book  */}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className="text-xl">Author</h2>
                  <h3 className="text-lg text-blue-500">$ 300</h3>
                  <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quos consequuntur, deleniti dolorum in tempora veritatis perferendis, facilis dolor blanditiis nobis atque sint architecto nam nostrum. Repellat iste atque quam.</p>
                  <div className="flex mt-3">
                    <img width={'150px'} height={'150px'} src="https://psdstamps.com/wp-content/uploads/2022/04/round-pending-stamp-png.png" alt="pending icon" />
                    <img width={'100px'} height={'100px'} src="https://pngimg.com/uploads/approved/approved_PNG1.png" alt="approved icon" />
                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className="w-full" src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                  <div className="mt-4 flex justify-end">
                    <button className="py-2 px-3 rounded bg-red-600 text-white ms-3 hover:bg-white hover:border hover:text-red-600 hover:border-red-600">Delete</button>
                  </div>
                </div>
              </div>
            </div>
        </div>
      }
      {/* purchase history*/}
      {
        purchaseStatus &&
        <div className='p-10 my-20 shadow rounded'>
            {/* duplicate div accordign to book  */}
            <div className="p-5 rounded mt-4 bg-gray-100">
              <div className="md:grid grid-cols-[3fr_1fr]">
                <div className="px-4">
                  <h1 className="text-2xl">Book Title</h1>
                  <h2 className="text-xl">Author</h2>
                  <h3 className="text-lg text-blue-500">$ 300</h3>
                  <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores quos consequuntur, deleniti dolorum in tempora veritatis perferendis, facilis dolor blanditiis nobis atque sint architecto nam nostrum. Repellat iste atque quam.</p>
                  <div className=" mt-3">
                    <img width={'150px'} height={'150px'} src="https://www.psdstamps.com/wp-content/uploads/2022/04/round-sold-stamp-png.png" alt="sold icon" />
                  </div>
                </div>
                <div className="px-4 mt-4 md:mt-0">
                  <img className="w-full" src="https://images.pexels.com/photos/19095295/pexels-photo-19095295.jpeg?cs=srgb&dl=pexels-esrakorkmaz-19095295.jpg&fm=jpg" alt="book" />
                  
                </div>
              </div>
            </div>
        </div>
      }
    </div>
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
    </>
  )
}

export default Profile





































