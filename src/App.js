import React from "react";
import './App.css'
import './style.css'
import './output.css'
import HomePage from './Components/Pages/Home/index'
import SecondPage from './Components/Pages/SecondPage/index'
import ThirtyPage from './Components/Pages/ThirtyPage/index'
import Footer from './Components/UI/Footer/index'

function App() {
  return (
    <div className="app flex flex-col">
      <HomePage />
      <SecondPage /> 
      <ThirtyPage />
      <Footer />
    </div>

  );
}

export default App;
