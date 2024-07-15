import { useState } from "react";
import { AppView } from "./components/app_components/AppView";
import { TestView } from "./components/test_components/TestView";
import "./css_files/app_css_files/App.css";

function App() {
 const [appState,setAppState]=useState('app')

  return (
    <>
    <div className='mode-selector'>
    <button onClick={()=>{setAppState('app')}}>App state</button>
    <button onClick={()=>{setAppState('test')}}>Test state</button>
    </div>
      {appState=='app'?
      <AppView/>
      :
      <TestView />
      }
      </>
  );
}

export default App;
