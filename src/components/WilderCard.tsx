import React from "react";
import Skills from "./Skills";

interface IProps {
    name: string, 
    description: string,
    city: string,
    skills: string
}

interface IPropsSkills {
    votes: number, 
    title: string
}



const WilderCard = (props: IProps) => {
  return (
    <div>
      <article className="card">
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <p> {props.city} </p>
        <h4>Wild Skills</h4>
        {skills.map((skill : IPropsSkills, index: number) => (
          <Skills key={index} title={title} votes={votes} />
        ))}
      </article>
    </div>
  );
};

export default WilderCard;