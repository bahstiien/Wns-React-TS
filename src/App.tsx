import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WilderCard from "./components/WilderCard";
import axios from "axios";
import {Form} from "./components/Form"

function App() {
  const [wilders, setWilders] = useState([]);
  const [hasError, setHasError] = useState(false);

  const getWilders = async () => {
    try {
      const { data } = await axios.get('http://localhost:3001/api/wilders');
      setWilders(data);
    } catch {
      setHasError(true);
    }
  };

  useEffect(() => {
    getWilders();
    // return () => {};
  }, [wilders]);

  return (
    <div>
      <Header />
      <main className="container">
        <h2>Wilders</h2>
         <Form /> 
       <button onClick={() => getWilders()}> MAJ </button>
        <section className="card-row">
          {wilders.map((wilder) => (
            <WilderCard key={wilder.id: number} {...wilder} />
          ))} 
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;