import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function AddJob() {
  const [modal,setModal]=useState(false)
  return (
   <>
      <div onClick={()=>setModal(true)}>
        add
      </div>
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
          <input
            type="text"
            name="jobTitle"
            placeholder="Job Title"
         
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
           
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="jobType"
            placeholder="Job Type"
        
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="number"
            name="salary"
            placeholder="Salary"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Qualification"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="experience"
            placeholder="Experience"
            className="w-full border border-gray-300 rounded-md p-2"
          />
          <textarea
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
            className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600"
          >
            Reset
          </button>
          <button
            type="submit"
            className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            Add
          </button>
        </div>
      </form>
    </div>}
      
   </>
  )
}

export default AddJob