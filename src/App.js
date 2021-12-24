import React from "react";
import './App.css';
import SectionLeft from "./components/SectionLeft/SectionLeft";
import SectionRight from "./components/SectionRight/SectionRight";


const App = ({store}) => {
  return (
          <div className = "container">
              <SectionLeft store={store.nazarMrochko}/>
              <SectionRight store={store.nazarMrochko.personInfo}/>
          </div>
  );
}

export default App;

