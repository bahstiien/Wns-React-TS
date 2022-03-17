import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from './components/About'
import WilderList from './components/WilderList'
import Formulaire from "./components/Formulaire";


function App() {
 


  return (
    <div> 
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<WilderList />} />
            <Route path="/about" element={<About />} />
            <Route path="/form" element={<Formulaire />}/>
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;