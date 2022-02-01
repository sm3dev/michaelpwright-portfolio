import React, { useEffect, useState } from "react";

export const HeroTagline = ({ tagline }) => {

  return (
    <div>
      <p className="hero tagline__text">{tagline}</p>
    </div>

  );
};
