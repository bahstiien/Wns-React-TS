import React from 'react';
import { useState, useEffect } from "react";
import WilderCard from './WilderCard'
import Form from './Form'
import axios from 'axios'

interface IWilder {
    _id: string,
    name: string,
    city: string,
    skills: {title: string, votes:number}[];
  }

const WilderList = () => {
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
              <h2>Wilders</h2>
          <Form onWilderCreated={() => getWilders()} onError={() => setHasError(true)}></Form>
        <button onClick={() => getWilders()}> Update </button>
          <section className="card-row">
            {wilders.map((wilder, index) => (
              <WilderCard key={wilder._id} _id={wilder._id} name={wilder.name} city={wilder.city} skills={wilder.skills} />
              ))} 
          </section>
        </div>
    );
};

export default WilderList;