import { createContext } from "react";
import { useState } from "react";

export const UserContext= createContext(null);

export const UserProvider=({children})=>{
    const [user, setUser]=useState("Not logged in");

    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}