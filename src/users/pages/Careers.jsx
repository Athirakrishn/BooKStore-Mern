import React,{useEffect, useState} from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare, faLocationDot,faXmark } from '@fortawesome/free-solid-svg-icons'
import { addApplicationAPI, getAllJobAPI } from '../../services/allApi'
import { ToastContainer,toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom'

const Careers = () => {
  const navigate = useNavigate()
  const [modalStatus,setModalStatus] = useState(false)
  const [allJobs,setAllJobs] = useState([])
  const [searchKey,setSearchKey] = useState("")
  const [jobTitle,setjobTitle] = useState("")
  const [jobId,setJobId] = useState("")
  const [applicationDetails,setApplicationDetails] = useState({
    fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
  })
  //reset resume input tag
  const [fileKey,setFileKey] = useState(Date.now())
  console.log(applicationDetails);
  
  useEffect(()=>{
    getAlljobs()
  },[searchKey])

  const handleApplyJob = (job)=>{
    setJobId(job._id)
    setjobTitle(job.title)
    setModalStatus(true)
  }

  const handleSubmitApplication = async ()=>{
    const token = sessionStorage.getItem("token")
    const {fullname,email,qualification,phone,coverLetter,resume} = applicationDetails
    if(!token){
      toast.info("Please login to apply job!!!")
      setTimeout(() => {
        navigate('/login')
      }, 2000);
    }else if(!fullname || !email || !qualification || !phone || !coverLetter || !resume || !jobId || !jobTitle){
      toast.info("Please fill the form completely!!!!")
    }else{
      const reqHeader = {
        "Authorization":`Bearer ${token}`
      }
      const reqBody = new FormData()
      for(let key in applicationDetails){
        reqBody.append(key,applicationDetails[key])
      }
      reqBody.append("jobTitle",jobTitle)
      reqBody.append("jobId",jobId)
      const result = await addApplicationAPI(reqBody,reqHeader)
      console.log(result);
      if(result.status==200){
        toast.success("Application submitted successfully!!!")
        handleReset()
        setModalStatus(false)
      }else if(result.status==409){
        toast.warning(result.response.data)
        handleReset()
      }else{
        toast.error("Something went wrong")
        handleReset()
        setModalStatus(false)
      }
    }
  }

  const handleReset = ()=>{
    setApplicationDetails({
      fullname:"",email:"",qualification:"",phone:"",coverLetter:"",resume:""
    })
      //reset resume input tag
    setFileKey(Date.now())
  }

  const getAlljobs = async()=>{
    try{
      const result = await getAllJobAPI(searchKey)
      if(result.status==200){
        setAllJobs(result.data)
      }else{
        console.log(result);        
      }
    }catch(err){
      console.log(err);      
    }
  }

  return (
    <>
    <Header/>
    <div className='md:px-40 p-5'>
      <div className="text-center my-5">
        <h1 className="text-3xl font-bold mb-5">Careers</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis earum eligendi blanditiis! Ipsa dolor aliquam odit consequatur illum ipsam necessitatibus veritatis? Eius dolorem corporis ratione. Pariatur provident explicabo cumque. Itaque.
        Et sequi quibusdam consequuntur maxime sint, quidem, velit a veniam blanditiis quis facilis odit, harum pariatur ipsum voluptatem rerum ut magnam earum reprehenderit. Labore soluta, expedita et nulla quibusdam veniam?</p>
      </div>
      <div className="my-10">
        <h1 className="text-2xl font-bold">Current openings</h1>
        <div className="flex my-10 justify-center items-center">
          <input
              type="text" onChange={e=>setSearchKey(e.target.value)}
              className="p-2  border border-gray-200 text-black w-100 placeholder-gray-400"
              placeholder="Job Title"
            />
            <button className="bg-green-900 text-white p-2">Search</button>
        </div>
        {/* duplicate job opening */}
        {
          allJobs?.length>0?
            allJobs?.map(job=>(
              <div key={job?._id} className="border border-gray-200 p-5 shadow my-5">
                <div className="flex mb-5 ">
                  <div className='w-full'>
                    <h1 className="text-xl">{job?.title}</h1>
                    <hr />
                  </div>
                  <button onClick={()=>handleApplyJob(job)} className="bg-blue-900 text-white p-3 ms-5 flex items-center">Apply <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='ms-2'/></button>
                </div>
                <p className='text-lg my-2'><FontAwesomeIcon icon={faLocationDot} />   {job?.location}</p>
                <p className='text-lg my-2'>Job Type : {job?.jobType}</p>
                    <p className='text-lg my-2'>Salary : {job?.salary}</p>
                    <p className='text-lg my-2'>Qualification : {job?.qualification}</p>
                    <p className='text-lg my-2'>Experience : {job?.experience}</p>
                    <p className='text-lg my-2 text-justify'>Description : {job?.description}</p>
              </div>
            ))
          :
          <p>No current Job Openings....</p>
        }
      </div>
    </div>
    {/* modal */}
        {
          modalStatus &&
          <div className='relative z-10 overflow-y-auto' >
            <div className="bg-gray-500/75 fixed inset-0 ">
              <div className="flex justify-center items-center min-h-screen scroll-auto">
                <div   className='bg-white rounded-2xl  md:w-150  w-100'>
                  {/* modal header */}
                  <div className='bg-black text-white flex justify-between items-center  p-3 text-xl'>
                    <h3>Application Form</h3>
                    <FontAwesomeIcon onClick={()=>setModalStatus(false)} icon={faXmark}/>
                  </div>
                  {/* modal body */}
                  <div className=' relative  p-5'>
                    <div className="md:grid grid-cols-2 gap-x-5">
                      <div className="mb-3  ">
                        <input value={applicationDetails?.fullname} onChange={e=>setApplicationDetails({...applicationDetails,fullname:e.target.value})} type="text" placeholder='Full Name' className="w-full p-2 border rounded placeholder-gray-400 text-black" />
                      </div>
                      <div className="mb-3  ">
                        <input value={applicationDetails?.qualification} onChange={e=>setApplicationDetails({...applicationDetails,qualification:e.target.value})} type="text" placeholder='Qualification' className="w-full p-2 border rounded placeholder-gray-400 text-black" />
                      </div>
                      <div className="mb-3  ">
                        <input value={applicationDetails?.email} onChange={e=>setApplicationDetails({...applicationDetails,email:e.target.value})} type="text" placeholder='E Mail ID' className="w-full p-2 border rounded placeholder-gray-400 text-black" />
                      </div>
                      <div className="mb-3  ">
                        <input value={applicationDetails?.phone} onChange={e=>setApplicationDetails({...applicationDetails,phone:e.target.value})} type="text" placeholder='Phone' className="w-full p-2 border rounded placeholder-gray-400 text-black" />
                      </div>
                      <div className="mb-3  col-span-2">
                        <textarea value={applicationDetails?.coverLetter} onChange={e=>setApplicationDetails({...applicationDetails,coverLetter:e.target.value})} placeholder='Cover Letter' name="" id="" className="w-full p-2 border rounded placeholder-gray-400 text-black"></textarea>
                      </div>
                      <div className="mb-3  col-span-2 flex flex-col text-gray-400">
                        <label htmlFor="">Resume</label>
                        <input key={fileKey} onChange={e=>setApplicationDetails({...applicationDetails,resume:e.target.files[0]})}  type="file" className="w-full  border rounded file:bg-gray-400 file:p-2 file:text-white"/>
                      </div>
                    </div>
                  </div>
                  {/* modal footer */}
                  <div className="bg-gray-200 p-3   w-full flex justify-end  ">
                      <button onClick={handleReset} className="py-2 px-3 rounded bg-gray-600 text-white ">Reset</button>
                      <button onClick={handleSubmitApplication} className="py-2 px-3 rounded bg-blue-600 text-white ms-3">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        }
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

export default Careers