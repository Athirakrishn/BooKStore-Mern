import React from 'react'
import { faPlusSquare, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import { jobContext } from '../../contextAPI/ContextShare'

import { addJobAPI } from '../../services/allApi'

function AddJob() {
   const{addJobResponse,setAddJobResponse} = useContext(jobContext)
  const [modal,setModal]=useState(false)
  const [newJob,setNewJob]=useState({   title: "",location: "",jobType: "",salary: "",qualification: "",experience: "",description: ""})

const handleReset = ()=>{
  setNewJob({ title: "",location: "",jobType: "",salary: "",qualification: "",experience: "",description: ""})
}

  const handleAddJob = async(e)=>{
    e.preventDefault( )
  const token = sessionStorage.getItem("token")
  const {title,location,jobType,salary,qualification,experience,description}=newJob
  if(!title|| !location|| !jobType || !salary || !qualification || !experience || !description){
    toast.info("please fill the form compltetly")

    }
else if(token){
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }

      try{
        const result = await addJobAPI(newJob,reqHeader)
     if(result.status==200){
      toast.success("current job added successfully")
      //resetdata
      handleReset()
      //share data to context
      setAddJobResponse(result.data)
      //close modal
      setModal(false)
     }else if(result.status==409){
      toast.warning(result.response.data)
      handleReset
     }else{
      toast.error("something went wrong")
     }
      }catch(err){
  console.log(err);
  toast.warning("something went wrong")
  
      }
  }else{
     toast.warning("something went wrong")
  
  }
    
}    
  
  return (
    <>
 
      <div onClick={()=>setModal(true)}>
<div className='bg-green-300 rounded'>
       <FontAwesomeIcon icon={faPlusSquare} className='text-2xl text-white '/>ADD
  
</div>      </div>
    { modal &&
      <div className="fixed inset-0 bg-gray-500/75 w-full h-full transition-opacity  flex items-center justify-center ">
      <form
        className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 relative"
      >
    
        <div className="bg-black text-white p-3  mb-3 flex justify-between ">
          <h2 className="text-lg font-semibold">Application form</h2>
          <button
            type="button"
            className="text-white text-xl leading-none font-bold hover:text-red-400"
            title="Close"
          >
           <FontAwesomeIcon icon={faXmark} onClick={()=>setModal(false)}/>
          </button>
        </div>

   
        <div className="space-y-3">
          <input value={newJob.title} onChange={e=>setNewJob({...newJob,title:e.target.value})}
            type="text"
            name="jobTitle"
            placeholder="Job Title"
         
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input value={newJob.location} onChange={e=>setNewJob({...newJob,location:e.target.value})}
            type="text"
            name="location"
            placeholder="Location"
           
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input value={newJob.jobType} onChange={e=>setNewJob({...newJob,jobType:e.target.value})}
            type="text"
            name="jobType"
            placeholder="Job Type"
        
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input value={newJob.salary} onChange={e=>setNewJob({...newJob,salary:e.target.value})}
            type="number"
            name="salary"
            placeholder="Salary"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input value={newJob.qualification} onChange={e=>setNewJob({...newJob,qualification:e.target.value})}
            type="text"
            name="qualification"
            placeholder="Qualification"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input value={newJob.experience} onChange={e=>setNewJob({...newJob,experience:e.target.value})}
            type="text"
            name="experience"
            placeholder="Experience"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <textarea value={newJob.description} onChange={e=>setNewJob({...newJob,description:e.target.value})}
            name="description"
            placeholder="Description"
            rows={3}
            className="w-full border border-gray-300 rounded-md p-2"
          ></textarea>
        </div>

        {/* Buttons */}
        <div className="flex justify-end mt-5 space-x-3">
          <button
            type="button"
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600" onClick={handleReset}
          >
            Reset
          </button>
          <button
            type="submit" onClick={handleAddJob}
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>}
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

export default AddJob


