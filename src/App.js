import React from "react";
import './App.css';
import SectionLeft from "./components/SectionLeft/SectionLeft";

const App = (props) => {
  return (
        <div className = "container">
            <SectionLeft store={props.store.nazarMrochko}/>
        </div>
  );
}

export default App;

