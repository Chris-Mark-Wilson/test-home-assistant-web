import { useState } from "react";
import { getEndpoint } from "./api";
import "../test.css"

export const Test = () => {
  const [data, setData] = useState(["No data"]);

  const sendRequest = async (endpoint) => {
    //   console.log(endpoint)
    try {
      const response = await getEndpoint(endpoint);
      if (Array.isArray(response)) {
        console.log('array received')
        setData(response);
      } else setData([response]);
    } catch (err) {
      console.log("App.jsx sendRequest error: ", err);
    }
  };

  return (
    <>
      <button onClick={() => sendRequest()}>/api/</button>
      {/* <button onClick={() => sendRequest("config")}>/api/config</button>
      <button onClick={() => sendRequest("events")}>/api/events</button>
      <button onClick={() => sendRequest("services")}>/api/services</button> */}
      <button onClick={() => sendRequest("states")}>/api/states</button>
      <ol className="data-list">
        {data.map((item,index) => {
          const headers = Object.keys(item);
          const values = Object.values(item);
        //   console.log('headers: ',headers);
        //   console.log('values: ',values)
          return (
            <>
            <hr/><br/>
            <div>State Object: {index}</div>
            <ul className="data-list-item" key={index}>
              {headers.map((header, index2) => {
          
                if(typeof (values[index2])=="object"){
                    // console.log("here")
                    return (
                        <ol className="sub-data-list-item" key={index2}>
                            {Object.values(values[index2]).map((value,index3)=>{
                                return(
                                    <li key={index3}><div>{Object.keys(values[index2])[index3].toUpperCase()}:</div> <div>{value??"Null"}</div></li>
                                )
                            })}
                            </ol>
                    )
                } else
                return (
                  <li key={index2}>
                    <div>{header.toUpperCase()}:</div> <div>{values[index2]??"Null"}</div>
                  </li>
                );
              })}
            </ul>
            </>
          );
        })}
      </ol>
      <div className="data">{JSON.stringify(data)}</div>
    </>
  );
};
