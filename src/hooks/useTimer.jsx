import { useState, useEffect, useRef } from 'react';

const useTimer = (isActive) => {
  const [isTimerCounting, setIsTimerCounting] = useState(isActive);
  const [timer, setTimer] = useState(0);

  const id = useRef(null);

  useEffect(() => {
    if (!isTimerCounting) {
      clearInterval(id.current);
    } else {
      id.current = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(id.current);
    };
  }, [isTimerCounting]);

  const stopTimer = () => {
    setIsTimerCounting(false);
  };

  const resumeTimer = () => {
    setIsTimerCounting(true);
  };

  const resetTimer = () => {
    setTimer(0);
  };

  return {
    timer,
    stopTimer,
    resumeTimer,
    resetTimer,
  };
};

export default useTimer;
