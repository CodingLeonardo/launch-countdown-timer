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

  useEffect(() => {
    const InternalId = setInterval(() => {
      const { days, hours, minutes, seconds, time } = getTime(dateTo);
      setTimeLeft({ days, hours, minutes, seconds, time });
      if (time <= 1) {
        setTimeLeft(initialState);
        clearInterval(InternalId);
      }
    }, 1000);
    return () => clearInterval(InternalId);
  }, []);

  return {
    timeLeft,
  };
};

export default useCountdown;
