import React from "react";


interface IProps {
    votes: number, 
    title: string
}
function Skills(props: IProps) {
  return (
    <li className="skills">
      {props.title}
      <span className="votes">{props.votes}</span>
    </li>
  );
}



export default Skills;