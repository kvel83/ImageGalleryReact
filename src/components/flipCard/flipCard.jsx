import React from "react";
import Card from "react-bootstrap/Card";
import './flipCard.css'

const FlipCard = (props) =>{
  const {url, title, desc} = props;
  return(
      <div className="flip-card d-flex align-items-stretch">
        <Card className="flip-card-inner bg-dark text-center rounded-3 border border-warning border-3">
        <div className="front card-block">
          <Card.Img  className = "image" src = {url} />
        </div>
        <div className="back">
            <h4>{title}</h4>
            <p className="h6">{desc}</p>
          </div>
        </Card>
      </div>
  )
};

export default FlipCard;

