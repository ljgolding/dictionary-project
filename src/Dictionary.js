import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results"


export default function Dictionary () {

    let [keyWord, setKeyWord] = useState("");
    let [results, setResults]= useState (null);

    function handleResponse(response) {
     
        setResults(response.data[0]);
    }

    function search (event) {
        event.preventDefault();
       
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
  
    axios.get(apiUrl).then(handleResponse);
    
    }

 function handleKeyWordChange(event) {
  setKeyWord(event.target.value);
}
    return (
    <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" onChange={handleKeyWordChange}/>
        </form>
  <Results results={results} />  
  
  </div>);

}