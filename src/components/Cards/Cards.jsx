import React from "react";
import "./Cards.scss"

const Cards = (props) => {

    const {id, name, email, address, phone} = props;

    return (  
        <div className="card">
              <h6 className="card__number">№{id}</h6> 
              <h2 className="card__name">{name}</h2>
              <h3 className="card__email">{email}</h3>
              <p className="card__addres">{address}</p>  
              <p className="card__phone">{phone}</p>
        </div>
    );
}

export default Cards;