import React from "react";
import './App.css';
import SectionLeft from "./components/SectionLeft/SectionLeft";

const App = ({store}) => {
  return (
        <div className = "container">
            <SectionLeft store={store.nazarMrochko}/>
        </div>
  );
}

export default App;

