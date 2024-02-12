import React, { useState, useEffect } from "react";
import Count from "./Count";
import getTime from "../utils/getTime";
import "../css/Countdown.css";

const Countdown = ({ date }) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const initCountdown = (dateTo) => {
    const timerUpdate = setInterval(() => {
      let { days, hours, minutes, seconds, time } = getTime(dateTo);
      setTimeLeft({
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        time: time,
      });

      if (time <= 1) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          time: 0,
        });
        clearInterval(timerUpdate);
      }
    }, 1000);
    return timerUpdate;
  };

  useEffect(() => {
    const InternalId = initCountdown(date);
    return () => clearInterval(InternalId);
  });
  return (
    <>
      <div className="Countdown">
        <Count name="Days" count={timeLeft.days} />
        <Count name="Hours" count={timeLeft.hours} />
        <Count name="Minutes" count={timeLeft.minutes} />
        <Count name="Seconds" count={timeLeft.seconds} />
      </div>
    </>
  );
};

export default Countdown;
