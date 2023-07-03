import React, { useState, useRef } from 'react';
import './Timer.css';

const Timer: React.FC = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    }
  };

  const pauseTimer = () => {
    if (isRunning) {
      setIsRunning(false);
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  return (
    <div className="timer-container">
      <h1 className="timer-text">Timer: {time}</h1>
      <div className="button-group">
        <button className="button" onClick={startTimer} disabled={isRunning}>
          Start
        </button>
        <button className="button" onClick={pauseTimer} disabled={!isRunning}>
          Pause
        </button>
        <button className="button" onClick={resetTimer}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Timer;
