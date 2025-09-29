import React, { useState } from 'react'
import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import Footer from '../../components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
function SettingAdmin() {
        const [listStatus,setListStatus] = useState(false)
  
  return (
    <>
<AdminHeader/>
 <div className="md:grid grid-cols-5 gap-2  ">
  <div className="col-span-1">
    <AdminSidebar/>
  </div>
  <div className="col-span-4 ms-12 ">
     <h1 className="font-2xl font-bold text-center my-10">
      settings
     </h1>

     {/* <div className="md-grid grid-cols-2 gap-x-5 m-5">
     <div*>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia molestias, repudiandae qui voluptates dolorum eligendi accusamus dolores rerum perferendis, sequi architecto voluptatem et autem quidem esse corporis quae consectetur nisi. Accusantium vel odio nihil architecto aut porro ducimus distinctio sunt dolores, totam rerum voluptatem minus error doloribus necessitatibus praesentium eius fugiat ipsa dolor! Quae illum dicta corporis qui facere excepturi neque unde quis sint laudantium ut eaque exercitationem dolor non autem nihil, quam repellendus voluptatibus inventore aperiam? Corporis quaerat, delectus nulla explicabo debitis possimus ut nesciunt, reprehenderit, excepturi animi reiciendis tempora quisquam eius facere tenetur error itaque atque aliquid. Nihil architecto quaerat mollitia molestiae quos, iusto iste omnis, iure excepturi eveniet sapiente. Tenetur iste ipsam obcaecati quibusdam temporibus quo voluptatem doloremque quisquam, tempora asperiores consequuntur aliquam non autem fugiat nihil quidem perspiciatis nostrum voluptatum amet esse nulla sit sed ipsum? Tempore officia et rem. Officia, consequuntur iure alias nihil nulla, praesentium deleniti nesciunt quasi asperiores dicta magnam optio eveniet temporibus architecto vel ipsam, voluptatem amet iusto necessitatibus culpa laborum beatae. Itaque, dignissimos ducimus atque neque, consequuntur, quo adipisci nulla accusamus sapiente exercitationem mollitia. Possimus earum aspernatur temporibus, soluta nobis eum sit porro culpa quasi odit fugiat beatae, eos ex tenetur?</p>
        
     </div*
     {/* <div className='rounded bg-blue-100 p-5 flex justify-center itmes-center'>
      <label htmlFor="admin pic "><img  src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png" alt="" style={{height:"200px",width:"200px",borderRadius:"50%"}}/>
     
        <FontAwesomeIcon icon={faPen}  style={{marginLeft:'140px',marginTop:'-150px'}} className='bg-yellow-400 p-1 text-white rounded '/>
   
      <input type="file" name='' id='admin pic' className='hidden'/>
      </label>

     <div className="mb-3 w-full grid grid-col">
       <input className='bg-white my-1 mx-2 rounded w-80' type="text"  placeholder='User Name'/>
      <input className='bg-white my-1 mx-2 rounded w-80' type="password" placeholder='Password'/>
       <input className='bg-white my-1 mx-2 rounded w-80 ' type="password"  placeholder='confirm password'/>
       <div className='mb-3 w-full flex justify-evenly'>
<button className='rounded bg-red-700 w-20'>reset</button>
<button className='rounded bg-green-700 w-20'>Update</button>
       </div>
     </div>
     </div>
     </div>
     </div> */} 


     <div className="grid md:grid-cols-2 gap-5 m-5">
  <div>
    <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque, placeat. Tempora vero repellat dolore, accusantium totam ad delectus, minus placeat vitae animi culpa? Hic omnis repellendus dignissimos soluta ab, animi rerum eligendi minima, magnam, quis voluptatum? Autem quo veniam commodi, at distinctio doloribus nemo, nisi hic debitis laborum aliquid eos rerum amet in. Nulla quis provident, quasi cupiditate laborum ratione iusto repellat necessitatibus ipsam sed reprehenderit consectetur magnam mollitia a officia maiores illo deleniti fugit odio, vel amet beatae alias? Mollitia reiciendis fuga explicabo vero veritatis modi laudantium sed, ad distinctio, nulla ab consequatur necessitatibus blanditiis doloribus quos tempora, aut maiores repellat similique ratione! Saepe, itaque. A, inventore! Similique et ab neque porro consectetur necessitatibus earum? Corrupti, ad iusto blanditiis consequuntur, et possimus at cum laboriosam deserunt amet cupiditate beatae aperiam molestiae labore explicabo nemo rerum quia! Deserunt expedita dolor nisi iure architecto nobis molestias, beatae, amet eum vero voluptate ut quod voluptatem, quasi animi saepe! Porro reiciendis dolorem, quo animi maiores maxime repudiandae corrupti esse beatae ut neque necessitatibus ullam accusamus possimus unde veritatis natus velit sit repellat modi provident quod soluta? Quasi itaque ab harum. Culpa, fuga. Hic quis non magni dicta dolorum. Officia animi natus similique dolorem.
    </p>
  </div>


  <div className="rounded bg-blue-100 p-5 flex flex-col items-center">

    <label htmlFor="admin-pic" className="relative">
      <img
        src="https://static.vecteezy.com/system/resources/previews/019/879/186/original/user-icon-on-transparent-background-free-png.png"
        alt="User profile"
        className="h-52 w-52 rounded-full"
      />
      <FontAwesomeIcon
        icon={faPen}
        className="absolute bottom-4 right-4 bg-yellow-400 p-2 text-white rounded cursor-pointer"
      />
      <input type="file" id="admin-pic" className="hidden" />
    </label>

    <div className="mt-5 w-full grid grid-cols-1 items-center">
      <input
        className="bg-white my-2 mx-auto rounded w-80 p-2 border"
        type="text"
        placeholder="User Name"
      />
      <input
        className="bg-white my-2 mx-auto rounded w-80 p-2 border"
        type="password"
        placeholder="Password"
      />
      <input
        className="bg-white my-2 mx-auto rounded w-80 p-2 border"
        type="password"
        placeholder="Confirm Password"
      />

      <div className="mt-3 flex justify-evenly w-full">
        <button className="rounded bg-red-700 text-white px-4 py-2">Reset</button>
        <button className="rounded bg-green-700 text-white px-4 py-2">Update</button>
      </div>
    </div>
  </div>
</div>

  </div>
 </div>
 <Footer/>
    </>
  )
}

export default SettingAdmin