
import { RenderElements} from "./RenderElements";

export const RenderData=({ dataType, data })=> {
    switch (dataType) {
        case "api":
            return <div>{data[0].message?data[0].message:'API Failed'}</div>
            
        case "states":
            return <RenderElements data={data} />;
         
        case "services":
            return <RenderElements data={data}/>
            

      default:
        return <div>No data to show</div>;
    }
  }