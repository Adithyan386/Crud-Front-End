import axios from "axios";

export const CommonAPI = async (httpmethod,url,reqBody)=>{
    let reqConfig = {
        method:httpmethod,
        url,
        data: reqBody,
        header:{
            "Content-Type":"applicaton/json"
        }
    }
    return await axios(reqConfig).then((res)=>{
        return res
    }).catch((err)=>{
        return err
    })
}