import { useState} from "react";
import { getEndpoint } from "./api";

export const Test=()=>{
    const [data, setData] = useState("No data");

    const sendRequest = async (endpoint) => {
      console.log(endpoint)
      try {
        const response = await getEndpoint(endpoint);
        setData(response);
      } catch (err) {
        console.log("App.jsx sendRequest error: ",err);
      }
    };
  
    return (
      <>
   
        <button onClick={()=>sendRequest()}>/api/</button>
        <button onClick={()=>sendRequest("config")}>/api/config</button>
        <button onClick={()=>sendRequest("events")}>/api/events</button>
        <button onClick={()=>sendRequest("services")}>/api/services</button>
        <button onClick={()=>sendRequest("states")}>/api/states</button>
        <div className="data">{JSON.stringify(data)}</div>
      </>
    );
}