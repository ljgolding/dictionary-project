import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results"


export default function Dictionary (props) {

    let [keyWord, setKeyWord] = useState(props.defaultKeyword);
    let [results, setResults]= useState (null);
    let [loaded, setLoaded]=useState(false);

    function handleResponse(response) {
     
        setResults(response.data[0]);
    }

    function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit (event) {
        event.preventDefault();
        search();   
    
    }


 function handleKeyWordChange(event) {
  setKeyWord(event.target.value);
}

function load(){
    setLoaded(true);
    search();
}

if (loaded) {
    return (
    <div className="Dictionary">

        <section>
        <h2>What word do you want to look up?</h2>
        <form onSubmit={handleSubmit}>
            <input type="search" onChange={handleKeyWordChange} defautValue={props.defaultKeyword}/>
        </form>
        <div className="hint">
            suggested words: sunset, wine, yoga, plant.....
        </div>
        </section>
  <Results results={results} />  
  
  </div>);

} else {
load();
return "Loading";
}
}