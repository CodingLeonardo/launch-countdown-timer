import { useState, useEffect, useCallback } from "react";
import getTime from "../utils/getTime";

const useCountdown = (dateTo) => {
  const initialState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    time: 0,
  };
  const [timeLeft, setTimeLeft] = useState(initialState);

  const initCountdown = useCallback(() => {
    const { days, hours, minutes, seconds, time } = getTime(dateTo);

    const timerUpdate = setInterval(() => {
      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        time,
      });

      if (time <= 1) {
        setTimeLeft(initialState);
        clearInterval(timerUpdate);
      }
    }, 1000);

    return timerUpdate;
  }, [timeLeft]);

  useEffect(() => {
    const InternalId = initCountdown();
    return () => clearInterval(InternalId);
  }, []);

  return {
    timeLeft,
  };
};

export default useCountdown;
