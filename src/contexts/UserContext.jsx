import { createContext } from "react";
import { useState } from "react";

export const UserContext= createContext(null);

export const UserProvider=({children})=>{
    const [user, setUser]=useState("Not logged in");
    const [user_id,setUser_id]=useState(1);
    const [logged_in,setLogged_in]=useState(false);

    return (
        <UserContext.Provider value={{
            logged_in,setLogged_in,
            user_id,setUser_id,
            user,setUser}}>
            {children}
        </UserContext.Provider>
    )

}