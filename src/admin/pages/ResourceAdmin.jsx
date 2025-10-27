import React, { useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import Footer from '../../components/Footer'
import AdminSidebar from '../components/AdminSidebar'
import { Link } from 'react-router-dom'
import { getAllUsersAPI } from '../../services/allApi'
import SERVERURL from '../../services/serverUrl'
function ResourceAdmin() {
  const [bookListStatus,setBookListStatus] = useState(true)
  const [usersListStatus, setUsersListStatus] = useState(false)
  const[allUsers,setAllUsers]=useState([])
console.log(allUsers);

 useEffect(()=>{
  if(sessionStorage.getItem("token")){
    const token= sessionStorage.getItem("token")
    if(bookListStatus==true){

    }else if(usersListStatus==true){
      getAllUsers(token)
    }else{
      console.log("something went wrong");
      
    }
  }
 },[usersListStatus])

  const getAllUsers = async(userToken)=>{
    const reqHeader = {
      "Authorization": `Bearer ${userToken}`
    }
    try{
      const result= await getAllUsersAPI(reqHeader)
      if(result.status==200){
        setAllUsers(result.data)
      }else{
        console.log(result);
        
      }
    }catch(err){
      console.log(err);
      
    }
  }
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div>
          <AdminSidebar/>
        </div>
        <div className="col-span-4">
          <div className='py-10'>
            <h1 className='text-center text-3xl'>All Resources</h1>
          </div>
          {/* tabs  */}
          <div className="flex justify-center items-center my-8 font-medium text-lg">
            <p onClick={() => { setBookListStatus(true); setUsersListStatus(false) }} className={bookListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>Sell Books</p>
            <p onClick={() => { setUsersListStatus(true); setBookListStatus(false) }} className={usersListStatus ? 'text-blue-500 p-4 border-gray-200 border-t border-l border-r rounded cursor-pointer' : 'p-4 border-b border-gray-200 cursor-pointer'}>users</p>

          </div>
          {/* content */}

          { bookListStatus && <div className="md:grid  grid-cols-4 justify-center">
              {/* <div className="p-3 w-80 justify-center items-center"> */}
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
              <div className="shadow rounded p-3 mx-4 w-50 ">
                <img src="https://tse4.mm.bing.net/th/id/OIP.MOw8E6VOioHuq3EPrxM2bQAAAA?pid=Api&P=0&h=180" alt="book" className='w-40' />
                <div className="flex flex-col justify-center items-center">
                  <p className='text-blue-700 font-bold'>Author</p>
                  <p >Book Title</p>
                  <Link to={'/books/:id/view'} className='bg-blue-600 text-white w-20 h-8 text-center rounded'>View book</Link>
                </div>

                {/* </div> */}

              </div>
                
            </div>}

            { usersListStatus &&
        <div className="md:grid  grid-cols-3 w-full justify-center ms-10 ">


          {/* duplicate */}
                  {
              allUsers?.length>0 ?
                allUsers?.map((user,index)=>(
                  <div key={index} className="shadow  rounded p-2 m-2 bg-gray-200">
                  <p className="text-red-700 font-bold text-md">ID:{user?._id}</p>
                    <div className='flex  items-center mt-3'> 
                          <img width={'100px'} height={'100px'} style={{borderRadius:'50%'}} src={user?.profile?`${SERVERURL}/uploads/${user?.profile}`:"https://img.freepik.com/premium-vector/man-character_665280-46970.jpg"} alt="user" />
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