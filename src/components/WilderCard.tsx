import React from "react";
import Skills from "./Skills";
import axios from 'axios';

interface IProps {
    _id?: string,
    name: string, 
    city: string,
    skills: {title :string, votes:number}[];
}

const WilderCard = ({name, city, skills, _id}: IProps) => {
  // RandomUser
  const randomUser = Math.floor(Math.random()* 10);

  function randomMenOrWomen(): string {
      if (Math.random() > 0.5){
      return "men";
      } else {
          return "women"
      }}



    // DELETE A WILDER
    const clickDelete = async () => {
  
    await axios.delete(`http://localhost:3001/api/wilders/${_id}`)
}
    return (
    <div>
      <article className="card">
        <h3>{name}</h3>
        <p> {city} </p>
        <h4>Wild Skills</h4>
        <p> id : {_id} </p>        
        {skills.map((skill, index) => (
          <Skills key={index} title={skill.title} votes={skill.votes} />
        ))}
        <img src={`https://randomuser.me/api/portraits/${randomMenOrWomen()}/${randomUser}.jpg`} alt={name} />
        <button onClick={clickDelete}>DELETE</button> 
      </article>
    </div>
  );
};

export default WilderCard;