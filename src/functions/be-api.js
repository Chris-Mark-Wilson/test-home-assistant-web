import axios from "axios";
const api=axios.create({
    baseURL:'http://localhost:5000/api'
})


export const getProperties=async(user_id)=>{

    return [{property_id:1,address:{houseNumber:1,street:"abc road",town:"trumpton"}},{property_id:2,address:{houseNumber:2,street:"xyz road",town:"camberwick green"}}]
    
    // try{
//     const response=api.get(`/properties/${user_id}`)
//     return response.data
// }catch(err){
//     return Promise.reject(err)
// }
}