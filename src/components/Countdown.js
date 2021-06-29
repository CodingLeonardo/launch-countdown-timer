import React, { useState, useEffect } from "react";
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
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const getTime = (dateTo) => {
    let now = new Date(),
      time = (new Date(dateTo) - now + 1000) / 1000,
      seconds = ("0" + Math.floor(time % 60)).slice(-2),
      minutes = ("0" + Math.floor((time / 60) % 60)).slice(-2),
      hours = ("0" + Math.floor((time / 3600) % 24)).slice(-2),
      days = Math.floor(time / (3600 * 24));

    return {
      seconds,
      minutes,
      hours,
      days,
      time,
    };
  };

  let timerUpdate;
  const countdown = (dateTo) => {
    timerUpdate = setInterval(() => {
      let currenTime = getTime(dateTo);
      setTimeLeft({
        days: currenTime.days,
        hours: currenTime.hours,
        minutes: currenTime.minutes,
        seconds: currenTime.seconds,
        time: currenTime.time,
      });

      if (currenTime.time <= 1) {
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
  };

  useEffect(() => {
    countdown(date);
    return () => clearInterval(timerUpdate);
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
