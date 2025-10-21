
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




// home page books api - call by home in useeefct
export const getHomeBooksAPI = async ()=>{
  return await  commonAPI("GET",`${SERVERURL}/home-books`)
}


//call career api
//authorised user api  
//authorised admin api
//view all books
//view single book 


//---------------------------authorized user api--------------------------
//upload book - called by profile component
export const addBookAPI = async(reqBody,reqHeader)=>{
  return await commonAPI("POST",`${SERVERURL}/add-books`,reqBody,reqHeader)
}

// view all books - called all books when page load
export const getAllBooksAPI = async (reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/all-books`,{},reqHeader)
}


//view single book - called by view component when it load in 
export const getSingleBooksAPI = async (bookId,reqHeader)=>{
  return await  commonAPI("GET",`${SERVERURL}/books/${bookId}/view`,{},reqHeader)
}