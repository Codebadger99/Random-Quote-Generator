import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [Quote, setQuote] = useState("");
  const [Author, setAuthor] = useState("");

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    fetch("https://dummyjson.com/quotes")
      .then((response) => response.json())
      .then((data) => {
        let dataQuotes = data.quotes;
        let randomnum = Math.floor(Math.random() * dataQuotes.length);
        let randomQuotes = dataQuotes[randomnum];
        setQuote(randomQuotes.quote);
        setAuthor(randomQuotes.author);
      });
  };

  const handleclick = () => {
    getQuotes();
  };
  return (
    <div className="App">
      <div className="card">
        <h1>{Quote}</h1> 
         <span>{Author}</span>
        <button className="btn" onClick={handleclick}>
          new quote
        </button>
      </div>
    </div>
  );
}
