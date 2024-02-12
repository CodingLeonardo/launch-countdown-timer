import React from "react";
import "../css/Count.css";

const Count = ({ name, count }) => {
  return (
    <div className="Count">
      <div className="Count-div" />
      <div className="Count-div" />
      <div className="Count-timer">
        <span>{count}</span>
      </div>
      <div className="Count-name">
        <h3>{name}</h3>
      </div>
    </div>
  );
};

export default Count;
