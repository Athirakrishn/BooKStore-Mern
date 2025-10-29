import React, { useContext, useEffect, useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import { adminUpdateContext } from '../../contextAPI/ContextShare'
import SERVERURL from '../../services/serverUrl'
import { toast, ToastContainer } from 'react-toastify'
import { updateAdminProfileAPI } from '../../services/allApi'
function SettingAdmin() {
        const [adminDetails, setAdminDetails] = useState({ username: "", password: "" ,cpassword:"",bio:"",profile:"",role:""})
        const[token,setToken]=useState()
        const [existingProfile,setExistingProfile]=useState()
        const [preview,setPreview]=useState("")
        const{setAdminEditResponse} = useContext(adminUpdateContext)  
        
          useEffect(() => {
            if(sessionStorage.getItem("token")){
              const userToken = sessionStorage.getItem("token")
              setToken(userToken)
              const user = JSON.parse(sessionStorage.getItem("user"))
              setAdminDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
              setExistingProfile(user.profile)
            }   
          }, [])
  
    const handlePictureUpload = (e)=>{
    setAdminDetails({...adminDetails,profile:e.target.files[0]})
    const url = URL.createObjectURL(e.target.files[0])
    setPreview(url)
  }

   const handleReset=()=>{
     const user = JSON.parse(sessionStorage.getItem("user"))
      setAdminDetails({username:user.username,password:user.password,cpassword:user.password,bio:user.bio,role:user.role})
      setExistingProfile(user.profile)
       setPreview("")
  }

 const handleUpdate = async () => {
        const { username, password, cpassword } = adminDetails
        if (!username || !password || !cpassword) {
            toast.info("Please fill the form completely")
        } else {
            if (password != cpassword) {
                toast.warning("Password & Confirm Password must be the same")
            } else {
                const reqHeader = {
                    "Authorization": `Bearer ${token}`
                }
                const reqBody = new FormData()
                if(preview){
                     for (let key in adminDetails){
                        reqBody.append(key,adminDetails[key])
                     }
                     const result = await updateAdminProfileAPI(reqBody,reqHeader)
                     if(result.status == 200){
                        toast.success("Profile Updated Succesfully")
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        handleReset()
                     }else{
                        toast.error("Something went wrong")
                        console.log(result);
                        
                     }
                }else{
                    const result = await updateAdminProfileAPI({username,password,cpassword,profile:existingProfile},reqHeader)
                     if(result.status == 200){
                        toast.success("Profile Updated Successfully")
                        sessionStorage.setItem("user",JSON.stringify(result.data))
                        setAdminEditResponse(result.data)
                        handleReset()
                     }else{
                        toast.error("Something went wrong")
                        console.log(result);
                        
                     }
                }
            }
        }
    }

  return (
    <>
<AdminHeader/>
 <div className="md:grid grid-cols-5 gap-2  ">
  <div className="col-span-1">
    <AdminSidebar/>
  </div>
  <div className="col-span-4 ms-12 ">
     <h1 className="text-4xl font-bold text-center my-10">
      Settings
     </h1> 

     <div className="grid md:grid-cols-2 gap-5 m-5">
  <div>
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, placeat. Tempora vero repellat dolore, accusantium totam ad delectus, minus placeat vitae animi culpa? Hic omnis repellendus dignissimos soluta ab, animi rerum eligendi minima, magnam, quis voluptatum? Autem quo veniam commodi, at distinctio doloribus nemo, nisi hic debitis laborum aliquid eos rerum amet in. Nulla quis provident, quasi cupiditate laborum ratione iusto repellat necessitatibus ipsam sed reprehenderit consectetur magnam mollitia a officia maiores illo deleniti fugit odio, vel amet beatae alias? Mollitia reiciendis fuga explicabo vero veritatis modi laudantium sed, ad distinctio, nulla ab consequatur necessitatibus blanditiis doloribus quos tempora, aut maiores repellat similique ratione! Saepe, itaque. A, inventore! Similique et ab neque porro consectetur necessitatibus earum? Corrupti, ad iusto blanditiis consequuntur, et possimus at cum laboriosam deserunt amet cupiditate beatae aperiam molestiae labore explicabo nemo rerum quia! Deserunt expedita dolor nisi iure architecto nobis molestias, beatae, amet eum vero voluptate ut quod voluptatem, quasi animi saepe! Porro reiciendis dolorem, quo animi maiores maxime repudiandae corrupti esse beatae ut neque necessitatibus ullam accusamus possimus unde veritatis natus velit sit repellat modi provident quod soluta? Quasi itaque ab harum. Culpa, fuga. Hic quis non magni dicta dolorum. Officia animi natus similique dolorem.
    </p>
  </div>


  <div className="rounded bg-blue-100 p-5 flex flex-col items-center">
          <input type="file" id="admin-pic" className="hidden" onChange={e=>handlePictureUpload(e)} />
    <label htmlFor="admin-pic" className="relative">
         {
                   existingProfile==""?
                <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src={preview?preview:"https://cdn-icons-png.flaticon.com/512/149/149071.png"} alt="profile" />
                 
                :
                <img className='z-52' style={{width:'150px',height:'150px',borderRadius:'50%'}} src={preview?preview:`${SERVERURL}/uploads/${existingProfile}`} alt="profile" />
              }
      <FontAwesomeIcon
        icon={faPen}
        className="absolute bottom-4 right-4 bg-yellow-400 p-2 text-white rounded cursor-pointer"
      />
  
    </label>

    <div className="mt-5 w-full grid grid-cols-1 items-center">
      <input
        value={adminDetails.username} onChange={e=>setAdminDetails({...adminDetails,username:e.target.value})}
        className="bg-white my-2 mx-auto rounded w-80 p-2 border"
        type="text"
        placeholder="User Name"
      />
      <input
          value={adminDetails.password} onChange={e=>setAdminDetails({...adminDetails,password:e.target.value})}
        className="bg-white my-2 mx-auto rounded w-80 p-2 border"
        type="text"
        placeholder="Password"
      />
      <input
      value={adminDetails.cpassword} onChange={e=>setAdminDetails({...adminDetails,cpassword:e.target.value})}
        className="bg-white my-2 mx-auto rounded w-80 p-2 border"
        type="text"
        placeholder="Confirm Password"
      />

      <div className="mt-3 flex justify-evenly w-full">
        <button className="rounded bg-red-700 text-white px-4 py-2" onClick={handleReset}>Reset</button>
        <button  className="rounded bg-green-700 text-white px-4 py-2"onClick={handleUpdate} >Update</button>
      </div>
    </div>
  </div>
</div>

  </div>
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

export default SettingAdmin