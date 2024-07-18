
import { AppView } from "./components/app_components/AppView";
import { TestView } from "./components/test_components/TestView";
import { HeaderNav } from "./components/app_components/HeaderNav.jsx";
import { Routes, Route } from "react-router-dom";
import "./css_files/app_css_files/App.css";
import { PropertyView } from "./components/app_components/PropertyView.jsx";
import {AddProperty} from "./components/app_components/AddProperty.jsx";
function App() {
  return (
    <>
    <HeaderNav/>
  
      <Routes>
        <Route path="/" element={<AppView />} />
        <Route path="/test" element={<TestView />} /> 
        <Route path="/addproperty" element={<AddProperty />} /> 
        <Route path="/property" element={<PropertyView />} /> 
      
      </Routes>
   
    </>
  );
}

export default App;
