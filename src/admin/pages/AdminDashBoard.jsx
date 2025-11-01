import React from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faUser, faUsers } from '@fortawesome/free-solid-svg-icons'
import { BarChart, Legend, XAxis, YAxis, CartesianGrid, Tooltip, Bar, ResponsiveContainer,PieChart, Pie } from 'recharts';
function AdminDashBoard() {
  const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
  },
];
const data01 = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 278 },
  { name: 'Group F', value: 189 },
];

const data02 = [
  { name: 'Group A', value: 2400 },
  { name: 'Group B', value: 4567 },
  { name: 'Group C', value: 1398 },
  { name: 'Group D', value: 9800 },
  { name: 'Group E', value: 3908 },
  { name: 'Group F', value: 4800 },
];
  return (
    <>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-3  ">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 ms-15 p-10">
          <div className='md:grid grid-cols-3'>
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-blue-900 grid grid-cols-2 p-4 items-center rounded text-white text-6xl">
                <FontAwesomeIcon icon={faBook} />
                <div className='text-center '>
                  <h3 className='text-xl'>total number of books</h3>
                  <h3 className="text-4xl ">100+</h3>
                </div>
              </div>
            </div>
            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-green-900 grid grid-cols-2 p-4 items-center rounded text-white text-6xl">
                <FontAwesomeIcon icon={faUsers} />
                <div className='text-center '>
                  <h3 className='text-xl'>Total number of Users</h3>
                  <h3 className="text-4xl ">100+</h3>
                </div>
              </div>
            </div>

            <div className="md:px-5 my-5 md:my-0">
              <div className="bg-yellow-900 grid grid-cols-2 p-4 items-center rounded text-white text-6xl">
                <FontAwesomeIcon icon={faUser} />
                <div className='text-center '>
                  <h3 className='text-xl'>Total number of Employee</h3>
                  <h3 className="text-4xl ">100+</h3>
                </div>
              </div>
            </div>

          </div>

          <div className='md:grid grid-cols-2 p-5 my-5'>
           
             <div className="md:grid grid-cols-2 p-5 mt-10">
          <div className='my-5 md:my-10 '>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis  />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8"  />
                  <Bar dataKey="uv" fill="#82ca9d"  />
                </BarChart>
            </ResponsiveContainer>
          </div>
          <div className='my-5 md:my-10 md:ms-10 w-100 h-80'>
            <ResponsiveContainer width="100%" height="100%">
               <PieChart>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius="50%"
                  fill="#8884d8"  
                />
                <Pie
                  data={data02}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  innerRadius="60%"
                  outerRadius="80%"
                  fill="#82ca9d"                  
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
    </div>
      <Footer />
    </>
  )
}

export default AdminDashBoard