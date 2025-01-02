import React from "react";
import "./Model.css";

function Model({ model, title, span, button, backgroundImage }) {
  return (
    <>
      <div className="row">
        <div
          className="modelDiv"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className="col-md-12 modelSub">
            <span className="model">{model}</span>
            <h1 className="modelTitle">{title}</h1>
            <span className="modelSpan">{span}</span>
            <button className="modelBtn">{button}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;
