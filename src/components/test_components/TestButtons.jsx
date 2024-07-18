import { getEndpoint } from "../../functions/ha-api";
import "../../css_files/test_css_files/test.css";

export const TestButtons = ({setData,setDataType}) => {

    const sendRequest = async (endpoint) => {
        //   console.log(endpoint)
        try {
          const response = await getEndpoint(endpoint);
          if (Array.isArray(response)) {
            // console.log("array received");
            setData(response);
            setDataType(endpoint)
          } else {
            setData([response]);
            setDataType(endpoint??"api");
          }
        } catch (err) {
          console.log("App.jsx sendRequest error: ", err);
        }
      };

      const getSwitches = async () => {
        try{
          const response = await getEndpoint("states");
          const switches = response.filter((entity) => entity.entity_id.startsWith("switch"));
          setData(switches);
          setDataType("switches");
        } catch (err){
          console.log("App.jsx getSwitches error: ", err);
        }
      };


      const getSensors = async (type) => {
        try{
          const response = await getEndpoint("states");
          const switches = response.filter((entity) => entity.entity_id.startsWith(type));
          setData(switches);
          setDataType("switches");
        } catch (err){
          console.log("App.jsx getSwitches error: ", err);
        }
      };

  return (
    <section className="test-buttons">
        <a href="https://developers.home-assistant.io/docs/api/rest" target="_blank">API docs</a>
      <button onClick={() => sendRequest()}>Check Home Assistant Api</button>
       {/*
      <button onClick={() => sendRequest("config")}>/api/config</button>
      <button onClick={() => sendRequest("events")}>/api/events</button> */}
      <button onClick={() => sendRequest("services")}>Show all services</button>
      <button onClick={() => sendRequest("states")}>Show all states / entities</button>
      <button onClick={() => getSwitches()}>Show all switches</button>
      <button onClick={() => getSensors("sensor")}>Show variable sensors</button>
      <button onClick={() => getSensors("binary_sensor")}>Show binary sensors</button>
    </section>
  );
};
