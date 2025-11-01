import React from 'react'
import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userAuthContext } from '../contextAPI/AuthContext'

function Pnf() {
    const {role,authorisedUser,setAuthorisedUser} = useContext(userAuthContext)
  const navigate = useNavigate()
  const handleHome = ()=>{
    if(role){
     role=="user" && navigate('/')
     role=="admin" && navigate('/admin-dashboard')
    }else{
      navigate('/')
    }
  }
  return (
   <>
   
   <div className="md:flex min-h-screen justify-center items-center text-center w-full flex-col   ">
  <img src="https://www.chainreaction.ae/wp-content/themes/chainreaction_new2021/assets/404.gif" alt="" className=" text-center justify-center items-center "/>  
 <h1 className='md:mx-70 text-xl'>OH NO!</h1>
 <h1 className='md:mx-70 text-4xl font-bold'>Look Like You are Lost</h1>
 <h1 className='md:mx-70 text-xl semi-bold my-4' >The page you are looking for is not available</h1>
<button onClick={handleHome} className="bg-blue-900 text-white rounded p-2 my-5">Back Home</button>
   </div>
 
   </>
  )
}

export default Pnf