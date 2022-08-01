import React from "react";
import Synonyms from "./Synonyms";
import "./Meanings.css"

export default function Meaning(props) {

    return (
      <div className="Meaning">
        <h3>{props.meaning.partOfSpeech}</h3>

        {props.meaning.definitions.map(function(definition, index) {
            return(
                <div key={index}>
                    <div className="definition">
                    {definition.definition}</div>
                    <br/>
                    <div className="example">
                  {definition.example}</div>
                    <br/>
                    
                    <Synonyms synonyms={definition.synonyms}/>
                    
                </div>
            );
        })}
      </div>
    ); 
}