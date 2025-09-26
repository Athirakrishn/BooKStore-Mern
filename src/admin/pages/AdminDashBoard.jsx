import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
function AdminDashBoard() {
  return (
    <>
      <AdminHeader/>
    <div className="md:grid grid-cols-5 gap-3  ">
  <div className="col-span-1">
    <AdminSidebar/>
  </div>
  <div className="col-span-4 ms-15">
     <p >
     Career Admin Page
     </p>

     


 

  </div>
 </div>
 <Footer/>
    </>
  )
}

export default AdminDashBoard