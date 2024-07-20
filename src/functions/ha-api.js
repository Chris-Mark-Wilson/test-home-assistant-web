import axios from "axios";
const TOKEN = import.meta.env.VITE_REACT_APP_ACCESS_TOKEN;
// console.log(TOKEN)
axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`;
//full url in vite.config as proxy for cors issues in development
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
<<<<<<< HEAD:src/functions/api.js
export const getInstance= async ()=>{
    try{
        const response=await axios.get('/')
        return response.data
    }
    catch(err){
        return Promise.reject(err)
    }
}
=======


>>>>>>> e17b5e138e98faf4f136af10c908e29ba0f195e4:src/functions/ha-api.js
