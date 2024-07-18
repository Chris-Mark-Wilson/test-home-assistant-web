import { createContext } from "react";
import { useState } from "react";

export const PropertiesContext= createContext(null);
export const PropertiesProvider=({children})=>{
    const [properties, setProperties]=useState([]);
    return (
        <PropertiesContext.Provider value={{
            properties, setProperties,
            }}>
            {children}
        </PropertiesContext.Provider>
    )

}

