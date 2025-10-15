
import commonAPI from "./commonApi"
import SERVERURL from "./serverUrl"
//guest user


//register api-called by auth component when register btn clicked content-type:"application/json"
export const registerAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

// login api
export const loginAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

// google login api
export const googleLoginAPI = async (reqBody)=>{
  return await commonAPI("POST",`${SERVERURL}/google-login`,reqBody)
}

// home page books api
//call career api
//authorised user api  
//authorised admin api