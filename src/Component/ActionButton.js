import React from "react";

const ActionButton = ({ quoteObj, newQuote }) => {
  return (
    <div className="button-container">
      <button className="twitter-button" id="twitter" title="Tweet this!">
        <a
          href={`https://twitter.com/intent/tweet?text=${quoteObj.text} - ${quoteObj.author}`}
          target="_blank"
          rel="noreferrer"
          id="tweet-quote"
        >
          <i className="fab fa-twitter"></i>
        </a>
      </button>
      <button onClick={newQuote} id="new-quote">
        New Quote
      </button>
    </div>
  );
};

export default ActionButton;
