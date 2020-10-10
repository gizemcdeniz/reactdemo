import React from 'react';
import { Glyphicon } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";




export default function SubTitleWithIcon(props){
  console.log(props)
  return(
      // <h4><Glyphicon glyph={props.icon} /> {props.title}</h4>
      <h4 icon={props.icon}> {props.title} </h4>
      
      
  );
}
