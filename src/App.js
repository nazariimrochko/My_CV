import React from "react";
import './App.css';
import SectionMain from "./components/SectionMain/SectionMain";
import SectionNav from "./components/SectionRight/SectionNav";


const App = ({store}) => {
  return (
          <div className = "container">
              <SectionMain store={store.nazarMrochko}/>
              <SectionNav store={store.nazarMrochko.personInfo}/>
          </div>
  );
}

export default App;

