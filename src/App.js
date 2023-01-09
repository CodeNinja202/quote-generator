import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});
  const [bgColor, setBgColor] = useState("");

  const colors = [
    "#FF6633",
    "#FFB399",
    "#FF33FF",
    "#FFFF99",
    "#00B3E6",
    "#E6B333",
    "#3366E6",
  ];

  const setRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * 7);
    const randomColor = colors[randomIndex];
    setBgColor(randomColor);
  };

  useEffect(() => {
    getQuote();
    
  }, []);

  const getQuote = () => {
    fetch("https://api.quotable.io/random")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuoteInfo({
          text: data.content,
          author: data.author,
        });
        setRandomColor();
      });
  };
console.log(bgColor)
  return (
    <div className="App" style={{backgroundColor: bgColor}}>
      <div id="quote-box">
        <p id="text">{quoteInfo.text}</p>
        <p id="author">{quoteInfo.author}</p>
        <button onClick={getQuote} id="new-quote">
          New Quote
        </button>
        <a
          href={
            "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text" +
            quoteInfo.text
          }
          target="_top"
          id="tweet-quote"
        >
          Post to Twitter
        </a>
      </div>
    </div>
  );
}

export default App;
