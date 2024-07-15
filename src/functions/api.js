import axios from "axios";
const TOKEN = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;
// console.log(TOKEN)
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
const url='/api/'

export const getEndpoint = async (endpoint="")=>{
    try{
const response= await axios.get(url+endpoint)
// console.dir(response)
return response.data
    }
    catch (err){
        // if(err.data) console.dir(err.data)
        //     console.dir(err)
        return Promise.reject(err)
    }

}
export const postEndpoint= async (endpoint,data)=>{
    try{
        const response=await axios.post(url+endpoint,data)
        console.log(response)
        return response.data;
        //carefull this returns 200 ok even if wrong entity is used
    }
    catch(err){
        return Promise.reject(err)
    }

}
