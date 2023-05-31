import React, { useEffect, useState } from "react";
import ActionButton from "./ActionButton";

function Quote() {
  const [quoteObj, setQuotesArr] = useState(null);
  const [animate, seAnimate] = useState(false);

  async function fetchQuotes() {
    try {
      const response = await fetch("https://type.fit/api/quotes");
      const quotes = await response.json();
      const randomNumber = Math.floor(Math.random() * quotes.length);

      setQuotesArr(quotes[randomNumber]);
    } catch (error) {
      console.log(error);
    }
  }

  const newQuoteHandler = () => {
    fetchQuotes();
    seAnimate(true);
    const anTimer = setTimeout(() => seAnimate(false), 400);
  };

  useEffect(() => {
    console.log(5);
    fetchQuotes();
  }, []);

  return quoteObj ? (
    <div id="quote-box" className={animate ? "quote-box" : ""}>
      <div className="quote-text">
        <i className="fas fa-quote-left"></i>
        <span id="text">{quoteObj.text}</span>
      </div>
      <div>
        <blockquote id="author">
          -- {quoteObj.author ? quoteObj.author : "Unknown"}
        </blockquote>
      </div>
      <ActionButton quoteObj={quoteObj} newQuote={newQuoteHandler} />
    </div>
  ) : (
    <div className="lds-roller">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default Quote;
