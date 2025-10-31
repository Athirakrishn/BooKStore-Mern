import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowsLeftRight, faLocationDot, faSquareArrowUpRight, faXmark } from '@fortawesome/free-solid-svg-icons'
import { getAllJobAPI } from '../../services/allApi'
function Careers() {
  const [careerModal, setCareerModal] = useState(false)
const [allJobs, setAllJobs] = useState([])
  const [searchKey, setSearchKey] = useState("")

  useEffect(() => {
    getAllJobs()
  }, [searchKey])

  const getAllJobs = async () => {
    try {
      const result = await getAllJobAPI(searchKey)
      if (result.status == 200) {
        setAllJobs(result.data)
      } else {
        console.log(result);
        
      }
    } catch (err) {
      console.log(err);

    }
  }

  return (

    <>
      <Header />
      <div className='my-5'>
        <div className=" text-center justify-center items-center p-5  md:mx-50">
          <h1 className='text-3xl my-3 font-bold'>Careers</h1>
          <p className=' '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ratione, officia delectus consequuntur, dicta libero magni omnis architecto voluptas culpa praesentium ipsum assumenda quae dolor, nihil rerum fugit expedita corrupti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio maiores fuga, modi vel accusantium magnam ex,ratione  aliquam eius odit consequuntur earum, itaque nulla labore veritatis quis aut atque!
          </p>
        </div>
        <h1 className='m-4 bold text-xl md:mx-50'>Current openings</h1>
        <div className="md:mx-80 grid grid-cols-2 justify-center items-center text-center md:w-200 w-100">
        <input onChange={e => setSearchKey(e.target.value)} type="text" placeholder="Job Title" className="border border-gray-300 px-3 py-2 rounded-md flex-1" />
          <button className='text-white bg-green-600 md:w-50 w-30 h-10'>Search </button>
        </div>

        <div className=" md:mx-45 bg-white shadow rounded p-5">
          

          {/* Job Details */}
          {
            allJobs?.length > 0 ?
              allJobs.map(job => (
                <div key={job?._id} className="bg-white mt-10 shadow-md rounded-md p-5">
                  <div className="flex justify-between items-center border-b pb-2 mb-4">
                    <h3 className="font-semibold text-lg">{job?.title}</h3>
                    <button onClick={() => setModalStatus(true)} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center gap-1">
                      Apply
                      <FontAwesomeIcon size='2x' icon={faSquareArrowUpRight} /></button>
                  </div>

                  {/* Job Details */}
                  <div className="space-y-2 text-base text-gray-700">
                    <p className="flex items-center gap-2">
                      <FontAwesomeIcon icon={faLocationDot} className="text-blue-500" /> {job?.location}
                    </p>
                    <p>
                      <span className="font-semibold">Job Type :</span> {job?.jobType}
                    </p>
                    <p>
                      <span className="font-semibold">Salary :</span> {job?.salary}
                    </p>
                    <p>
                      <span className="font-semibold">Qualification :</span> {job?.qualification}
                    </p>
                    <p>
                      <span className="font-semibold">Experience :</span> {job?.experience}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-gray-600 leading-relaxed text-base
                  ">
                    <span className="font-semibold text-gray-800"> Description :</span> {job?.description}
                  </p>
                </div>
              ))
              :
              <p>No Job Openings..</p>

          }
 
        </div>
      </div>
      {/* modal */}
      
       { careerModal && <div className='relative z-10 ' >
          <div className="bg-gray-500/75 fixed inset-0 transition-opacity">
            <div className="justify-center flex items-center md:min-h-screen">
              <div className='bg-white text-black md:h-100 md:w-200 w-100 rounded'>
                <div className='bg-black text-white flex justify-between items-center p-3'>
                  <h3>Application Form</h3>
                  <FontAwesomeIcon icon={faXmark} onClick={()=>setCareerModal(false)}/>
                </div>
                <div className=' m-6 md:w-180  items-center  text center '>
                  <div className='md:grid md:grid-cols-2 my-5 '>
                    <input type="text" placeholder='Full Name' className='m-2 border ' />
                    <input type="text" placeholder='Qualification' className='m-2 border ' />
                    <input type="email" placeholder='Email' className='m-2 border ' />
                    <input type="Phone" placeholder='Full Name' className='m-2 border ' />
                  </div>
                  <textarea type="text" rows={3} placeholder='Cover Letter' className='md:w-180 px-2 border ' />
  
                  <div className='flex justify-start md:w-180 my-4 border '>
                    <div className='px-10 py-1 bg-gray-300 text-black'>Chose file</div>
                    <input type="file" className="py-1 px-10 " placeholder='No file chosen' />
                  </div>
                   <div className='flex justify-end md:w-180 my-4'>
                <button className=' rounded bg-red-500 text-white w-30 p-2 m-2'>Reset</button>
                <button className=' rounded bg-green-500 text-white w-30 p-2 m-2' onClick={()=>setCareerModal(false)}>Submit</button>
                  </div>
  
                </div>
  
  
              </div>
            </div>
          </div>
        </div>
      }







      <Footer />

    </>
  )
}

export default Careers