import React, {useState} from "react";
import "./Dictionary.css";


export default function Dictionary () {

    let [keyWord, setKeyWord] = useState("");

    function search (event) {
        event.preventDefault();
        alert(`searching for ${keyWord} definition`);
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