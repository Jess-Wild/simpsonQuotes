import React from 'react';
import "../styles/DisplayQuote.css";

function DisplayQuote({ quote, character, image }){
     return (
        <figure className="QuoteCard">
          <img src={image} alt={character} />
          <figcaption>
            <blockquote>{quote}</blockquote>
            <cite>{character}</cite>
          </figcaption>
        </figure>
      );
    
}

export default DisplayQuote;