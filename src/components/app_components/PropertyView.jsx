import { PropertiesContext } from "../../contexts/PropertiesContext"
import { useLocation } from "react-router-dom"
export const PropertyView = () => {

    const location=useLocation();
    const queryParams=new URLSearchParams(location.search);
    const property_id=queryParams.get("property_id");
    return (
        <div>
            <h1>Property View</h1>
            <p>Property ID: {property_id}</p>
        </div>
    )
}
    