import React from "react";
import "../css/Countdown.css";

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

const Countdown = ({ date }) => {
  return (
    <>
      <div className="Countdown">
        <Count name="Days" count={10} />
        <Count name="Hours" count={5} />
        <Count name="Minutes" count={50} />
        <Count name="Seconds" count={30} />
      </div>
    </>
  );
};

export default Countdown;
