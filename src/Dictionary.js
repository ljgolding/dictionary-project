import React, {useState} from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";


export default function Dictionary (props) {

    let [keyWord, setKeyWord] = useState(props.defaultKeyword);
    let [results, setResults]= useState (null);
    let [loaded, setLoaded]=useState(false);
    let [photos, setPhotos]= useState(null);

    function handleResponse(response) {
          setResults(response.data[0]);
    }

    function handlePexelsResponse(response) {
          setPhotos(response.data.photos);
        }

    function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);

    const pexelsApiKey =
      "563492ad6f9170000100000111e332b45f90442cbdf40e1cb634ccba";  
    let headers = { Authorization: `Bearer ${pexelsApiKey}` }; 
    
    let pexelsApiUrl=`https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
    axios.get(pexelsApiUrl, {headers: headers}).then(handlePexelsResponse);
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
  <Photos photos={photos} /> 
  
  </div>);

} else {
load();
return "Loading";
}
}