import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [Quote, setQuote] = useState("");
  const [Author, setAuthor] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getQuotes();
  }, []);

  const getQuotes = () => {
    try {
      setLoading(true);
      fetch("https://dummyjson.com/quotes")
        .then((response) => response.json())
        .then((data) => {
          let dataQuotes = data.quotes;
          let randomnum = Math.floor(Math.random() * dataQuotes.length);
          let randomQuotes = dataQuotes[randomnum];
          setQuote(randomQuotes.quote);
          setAuthor(randomQuotes.author);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const handleclick = () => {
    getQuotes();
  };
  return (
    <div className="App">
      <div className="container">
        <section className="mx-auto my-5">
          <div className="card">
            <div className="card-body">
              <blockquote className="blockquote blockquote-custom bg-white px-3 pt-4">
                <div className="blockquote-custom-icon bg-info shadow-1-strong">
                  <i className="fa fa-quote-left text-white"></i>
                </div>
                <p className="mb-0 mt-2 font-italic">{Quote}</p>
                <footer className="blockquote-footer pt-4 mt-4 border-top">
                  {Author}
                </footer>
              </blockquote>
              <div className="d-flex align-items-center justify-content-center">
                <button
                  className="btn btn-primary mt-2"
                  onClick={handleclick}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "More"}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
