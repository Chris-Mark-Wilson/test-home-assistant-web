import { useState } from "react"
import { postEndpoint,getEndpoint } from "../../functions/api"


export const AppView=()=>{

    const [response,setResponse]=useState('No response')

    const openWindow= async ()=>{
        console.log('opening window')
        try{
        const result=await postEndpoint(
            'services/switch/turn_on',
            {entity_id:"switch.window_relay_switch_switch_1"}
        )
        console.log(result)
        setResponse(result)
    }
    catch(err){
        console.log(err)
        setResponse(err)
    }
    }
    const closeWindow=async()=>{

        console.log('closing window')
        try{
        const result=await postEndpoint(
            'services/switch/turn_on',
            {entity_id:"switch.window_relay_switch_switch_2"}
        )
        console.log(result)
        setResponse(result)
    }catch(err){
        console.log(err)
        setResponse(err)
    }
    }
    return (<>
   
        <div className="app-view">AppView</div>
        <button onClick={openWindow}>Open Window</button>
        <button onClick={closeWindow}>Close Window</button>
        <div id='response-data'>{response}</div>
        </>
        )
}