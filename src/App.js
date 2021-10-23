import React from "react";
import './App.css'
import './style.css'
import './output.css'
import Header from './Components/UI/Header/index'
import Deneme from './Components/UI/deneme/index'


function App() {
  return (
    <div className="app flex flex-col">
      <Header />
      <Deneme /> 
    </div>

  );
}

export default App;
