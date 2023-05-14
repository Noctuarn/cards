import React from "react";
import "./Cards.scss"

const Cards = () => {
    return (  
        <div className="card">
              <h6 className="card__number">№1</h6> 
              <h2 className="card__name">Sashko</h2>
              <h3 className="card__email">sashko88005553535@gmail.com</h3>
              <p className="card__addres">Rosilna street</p>  
              <p className="card__phone">+4897123712</p>
        </div>
    );
}

export default Cards;