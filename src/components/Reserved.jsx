import React from "react";
import "./Reserved.css";

export default function Reserved({ image, title, button }) {
  return (
    <div className="row">
      <div className="col-md-12 cardBody">
        <div className="cardsDetail">
          <img className="iconCard" src={image} />
          <p className="detailP">{title}</p>
          <button className="cardBtn">{button}</button>
        </div>
      </div>
    </div>
  );
}
