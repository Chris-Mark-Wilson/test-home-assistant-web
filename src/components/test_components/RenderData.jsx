import { ShowStates } from "./ShowStates";
import { ShowServices } from "./ShowServices";

export const RenderData=({ dataType, data })=> {
    switch (dataType) {
        case "api":
            return <div>{data[0].message?data[0].message:'API Failed'}</div>
            
        case "states":
            return <ShowStates data={data} />;
         
        case "services":
            return <ShowServices data={data}/>
            

      default:
        return <div>No data to show</div>;
    }
  }