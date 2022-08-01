import "./App.css";
import Dictionary from  "./Dictionary"

function App() {
  return (
    <div className="App">
      < div className="container">
      <header className="App-header">Dictionary</header>
      <main><Dictionary defaultKeyword="sunset" /></main>
      <footer className="text-center"> Coded by Lindsay Golding and is {' '} <a href="https://github.com/ljgolding/dictionary-project" target="_blank" rel="noopener noreferrer">open-sourced on Github</a></footer>
    </div>
    </div>
  );
}

export default App;
