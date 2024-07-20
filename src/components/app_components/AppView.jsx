import { useState } from "react"
import { postEndpoint,getEndpoint,getInstance } from "../../functions/api"
import { HomeAssistantDashboard } from "./HomeAssistantDashboard"


export const AppView=()=>{

    const [response,setResponse]=useState('No response')
    const [instance,setInstance]=useState(false)
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

    const showInstance=async()=>{
        if(instance){
            setInstance(false)
    } else{
        setInstance(true)
    }
}
    return (
    <>
   
        <div className="app-view">AppView</div>
        <button onClick={openWindow}>Open Window</button>
        <button onClick={closeWindow}>Close Window</button>
        <button onClick={showInstance}>{!instance?'Show Instance':'Hide Instance'}</button>
        <div id='response-data'>{response}</div>
        {instance&&
        <HomeAssistantDashboard/>
}
        </>
        )
}