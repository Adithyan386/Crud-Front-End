import { baseURL } from "./Service/baseURL"
import { CommonAPI } from "./Service/CommanAPI"

export const adduser = async(user)=>{
    return await CommonAPI(`POST`,`${baseURL}/users`,user)
}

export const getuser = async()=>{
    return await CommonAPI(`GET`,`${baseURL}/users`,'')
}

export const deleteUser = async(id)=>{
    return await CommonAPI(`DELETE`,`${baseURL}/users/${id}`,{})
}

export const edituser = async(id,user)=>{
    return await CommonAPI(`PUT`,`${baseURL}/users/${id}`,user)
}