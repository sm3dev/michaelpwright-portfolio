import React, { useEffect, useState } from "react";
import { getRandomObj } from "./Helpers";

export const Quotes = ({ quoteObj }) => {
  const [quote, qetQuote] = useState({});

  useEffect(() => {
    console.log(quoteObj);
    // setSingleQuote(getRandomObj(quotes));
  }, []);

  return (
    <section className="blockquote__container">
      <blockquote id="blockquote">
        <p className="blockquote-single-line__text">{quote.quoteText}</p>
        <cite className="quote__cite">&#8212; {quote.author}</cite>
      </blockquote>
    </section>
  );
};
