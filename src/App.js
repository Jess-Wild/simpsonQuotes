import './App.css';
import { useState } from 'react';
import DisplayQuote from './components/DisplayQuote';
import axios from "axios";

const sampleQuote = {
  
    quote: "By chilling my loins I increase the chances of impregnating my wife.",
    character: "Apu Nahasapeemapetilon",
    image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
    characterDirection: "Left"
   
}


function App() {

  const [quote, setQuote] = useState("");

  function getQuote () {
    axios
    .get('https://simpsons-quotes-api.herokuapp.com/quotes')
    .then((response) => response.data)
    .then((data) => {
      console.log(data[0])
      setQuote(data[0]);
    });
  }

  return (
    <div className="App">
    <DisplayQuote {...quote} />
    <button type="button" onClick={getQuote}> Change Quote </button>
    </div>
  );
}

export default App;
