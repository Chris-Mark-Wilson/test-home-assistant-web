import { useState } from "react";
import { RenderData } from "./RenderData";
import { TestButtons } from "./TestButtons";
import "../../css_files/test_css_files/test.css";

export const TestView = () => {
  const [data, setData] = useState(["No data"]);
  const [dataType,setDataType] = useState("");



  return (
    <>
      <TestButtons setData={setData} setDataType={setDataType}/>
      <RenderData dataType={dataType} data={data} />
        
      {/* <div className="data">{JSON.stringify(data)}</div> */}
    </>
  );
};
