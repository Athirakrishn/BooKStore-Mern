
import commonAPI from "./commonApi"
import SERVERURL from "./serverUrl"
//guest user


//register api-called by auth component when register btn clicked content-type:"application/json"
export const registerAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login api
// home page books api
//call career api
//authorised user api  
//authorised admin api