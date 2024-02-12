import React from "react";
import Count from "./Count";
import useCountdown from "../hooks/useCountdown";
import "../css/Countdown.css";

const Countdown = ({ date }) => {
  const {
    timeLeft: { days, hours, minutes, seconds },
  } = useCountdown(date);
  return (
    <>
      <div className="Countdown">
        <Count name="Days" count={days} />
        <Count name="Hours" count={hours} />
        <Count name="Minutes" count={minutes} />
        <Count name="Seconds" count={seconds} />
      </div>
    </>
  );
};

export default Countdown;
