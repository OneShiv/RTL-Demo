import React from "react";
import "./Card.css";

const Card = props => {
  return (
    <div className="Card">
      <h3 data-testid="card-title">{props.title}</h3>
      <p data-testid="card-description">{props.description}</p>
    </div>
  );
};

export default Card;
