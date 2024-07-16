import { createContext } from "react";
import { useState } from "react";

export const DevicesContext= createContext(null);
export const DevicesProvider=({children})=>{
    const [devices, setDevices]=useState([]);
    return (
        <DevicesContext.Provider value={{
            devices, setDevices,
            }}>
            {children}
        </DevicesContext.Provider>
    )

}

