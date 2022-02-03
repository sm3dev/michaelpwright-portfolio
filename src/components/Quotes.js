import React from "react";
// import { getRandomObj } from "./Helpers";

export const Quotes = ({ singleQuote }) => {
  console.log(singleQuote)

  return (
    <section className="blockquote__container">
    <blockquote id="blockquote">
      <p className="blockquote-single-line__text">
        {singleQuote?.quoteText}
      </p>
      <cite className="quote__cite">&#8212; {singleQuote?.author}</cite>
    </blockquote>
  </section>
  );
};
