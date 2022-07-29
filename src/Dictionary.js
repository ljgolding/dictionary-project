import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";


export default function Dictionary () {

    let [keyWord, setKeyWord] = useState("");

    function search (event) {
        event.preventDefault();
        alert(`searching for ${keyWord} definition`);
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
  
    axios.get(apiUrl).then(handleResponse);
    
    }



 function handleKeyWordChange(event) {
  console.log(event);
  setKeyWord(event.target.value);
}


    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeyWordChange}/>
        </form>
    </div>);
}