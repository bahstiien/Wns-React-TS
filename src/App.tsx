import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import WilderCard from "./components/WilderCard";
import axios from "axios";
import Form from './components/Form'

interface IWilder {
  _id: string,
  name: string,
  city: string,
  skills: {title: string, votes:number}[];
}
function App() {
  const [wilders, setWilders] = useState<IWilder[]>([]);
  const [hasError, setHasError] = useState<boolean>(false);

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
        <Form onWilderCreated={() => getWilders()} onError={() => setHasError(true)}></Form>
       <button onClick={() => getWilders()}> Update </button>
        <section className="card-row">
          {wilders.map((wilder, index) => (
            <WilderCard key={wilder._id} _id={wilder._id} name={wilder.name} city={wilder.city} skills={wilder.skills} />
          ))} 
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;