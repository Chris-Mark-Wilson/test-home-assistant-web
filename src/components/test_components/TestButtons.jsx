import { getEndpoint } from "../../functions/api";

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

  return (
    <section className="test-buttons">
        <a href="https://developers.home-assistant.io/docs/api/rest" target="_blank">API docs</a>
      <button onClick={() => sendRequest()}>/api/</button>
       {/*
      <button onClick={() => sendRequest("config")}>/api/config</button>
      <button onClick={() => sendRequest("events")}>/api/events</button> */}
      <button onClick={() => sendRequest("services")}>/api/services</button>
      <button onClick={() => sendRequest("states")}>/api/states</button>
    </section>
  );
};
