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
