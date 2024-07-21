import { useState } from "react";
import { RenderData } from "./RenderData";
import { TestButtons } from "./TestButtons";
import { getInstance } from "../../functions/ha-api";
import "../../css_files/test_css_files/test.css";

export const TestView = () => {
  const [data, setData] = useState(["No data"]);
  const [dataType,setDataType] = useState("");
  const [SRC,setSRC]=useState("")

const loadInstance=()=>{
  getInstance().then((data)=>{
    setSRC(data)
   
  }).catch((err)=>{
    setSRC(err)
    console.error(err)
  })
}

  return (
    <div className="test-view">
      <button onClick={loadInstance}>Load authorised instance</button>
      <TestButtons setData={setData} setDataType={setDataType}/>
      <RenderData dataType={dataType} data={data} />
        {SRC ? <div className="data">{JSON.stringify(SRC)}</div> : null}
      {/* <div className="data">{JSON.stringify(data)}</div> */}
    </div>
  );
};
