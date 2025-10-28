import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'
import { getAllUsersAPI, listAllBooksAPI, updateBookStatusAPI } from '../../services/allApi'
import SERVERURL from '../../services/serverUrl'
function ResourceAdmin() {
  const [bookListStatus, setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  const [allUsers, setAllUsers] = useState([])
  // console.log(allUsers);
  const [userBooks, setUserBooks] = useState([])
  const [updateBookStatus,setUpdateBooksStatus] =useState({})
  // console.log(userBooks);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token")
      if (bookListStatus == true) {
        getAllBooks(token)
      } else if (usersListStatus == true) {
        getAllUsers(token)
      } else {
        console.log("something went wrong");

      }
    }
  }, [usersListStatus,updateBookStatus])

  const getAllUsers = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await getAllUsersAPI(reqHeader)
      if (result.status == 200) {
        setAllUsers(result.data)
      } else {
        console.log(result);

      }
    } catch (err) {
      console.log(err);

    }
  }

  const getAllBooks = async (userToken) => {
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try {
      const result = await listAllBooksAPI(reqHeader)
      if (result.status == 200) {
        setUserBooks(result.data)
      } else {
        console.log(result);
      }
    } catch (err) {
      console.log(err);

    }
  }

  const approveBook = async(book)=>{
    const userToken = sessionStorage.getItem("token")
    const reqHeader ={
       "Authorization": `Bearer ${userToken}`
    }
    try{
      const result = await updateBookStatusAPI(book,reqHeader)
      if(result.status==200){
        setUpdateBooksStatus(result.data)
      }
    }
    catch(err){
       console.log(err);
       
    }
  }

  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div>
          <AdminSidebar />
        </div>
        <div className="col-span-4 ms-14">
          <div className='py-10'>
            <h1 className='text-center text-3xl'>All Resources</h1>
          </div>
          {/* tabs  */}
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p onClick={() => { setBookListStatus(true); setUsersListStatus(false) }} className={bookListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Sell Books</p>
            <p onClick={() => { setUsersListStatus(true); setBookListStatus(false) }} className={usersListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>users</p>

          </div>
          {/* content */}

          {bookListStatus &&
            <div className="md:grid  grid-cols-4 justify-center">
              {/* <div className="p-3 w-80 justify-center items-center"> */}
              {userBooks?.length > 0 ?
                userBooks?.map((book, index) => (
                  <div key={index} className="shadow p-3 rounded mx-4">
                    <img width={'100%'} height={'300px'} src={book?.imageUrl} alt="book" />
                    <div className="flex flex-col justify-center items-center">
                      <p className="text-blue-700 font-bold">{book?.author.slice(0, 20)}</p>
                      <p className='mb-2'>{book?.title.slice(0, 20)}</p>
                      <p className='my-1'>₹{book?.price}</p>
                      <div>
                        {book?.status == "Pending" &&
                          <div  onClick={()=>approveBook(book)} className='border bg-green-700 p-1 rounded border-none text-white mx-2 hover:text-green-500 hover:bg-white w-full'>Approve</div>
                        }
                        {book?.status == "approved" &&
                          <div className='flex justify-end w-full'><img className='w-10 h-10' src="https://static.vecteezy.com/system/resources/previews/025/469/373/original/check-mark-icon-checkmark-icon-approved-symbol-confirmation-sign-design-elements-checklist-positive-thinking-sign-correct-answer-flat-icon-illustration-vector.jpg" alt="" /></div>
                        }
                      </div>

                    </div>
                  </div>
                ))
                :
                <p>no books</p>

              }


            </div>
          }

          {usersListStatus &&
            <div className="md:grid  grid-cols-3 w-full justify-center ms-10 ">


              {/* duplicate */}
              {
                allUsers?.length > 0 ?
                  allUsers?.map((user, index) => (
                    <div key={index} className="shadow  rounded p-2 m-2 bg-gray-200">
                      <p className="text-red-700 font-bold text-md">ID:{user?._id}</p>
                      <div className='flex  items-center mt-3'>
                        <img width={'100px'} height={'100px'} style={{ borderRadius: '50%' }} src={user?.profile ? `${SERVERURL}/uploads/${user?.profile}` : "https://img.freepik.com/premium-vector/man-character_665280-46970.jpg"} alt="user" />
                        <div className="flex flex-col  ml-3 w-full">
                          <p className='text-blue-800 text-lg font-bold'>{user?.username}</p>
                          <p>{user?.email}</p>
                        </div>


                      </div>

                    </div>
                  ))
                  :
                  <div>No users</div>
              }
            </div>
          }
        </div>
      </div>

      <Footer />
    </>
  )
}

export default ResourceAdmin