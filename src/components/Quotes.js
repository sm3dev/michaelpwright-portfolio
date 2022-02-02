import React, { useEffect, useState } from "react";
import { getQuotes } from "./DataManager";


export const Quotes = ({ allQuotes }) => {
    
  return <div className="blockquote__container">
    <blockquote id="blockquote">
      <cite></cite>
    </blockquote>
  </div>;
};
