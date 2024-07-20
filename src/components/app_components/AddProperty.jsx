import { UserContext } from "../../contexts/UserContext"
import { useContext } from "react";


export const AddProperty=()=>{
    const {logged_in}=useContext(UserContext);
    return (
        <>
        <h1>Add property</h1>
        {logged_in ? <h5>Logged in</h5> : <h5>Please log in</h5>}
        </>
    )
}