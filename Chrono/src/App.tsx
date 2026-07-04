import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [time, setTime] = useState(0); 
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setTime((prev) => prev + 10);
    }, 10); 

    return () => clearInterval(interval);
  }, [isRunning]);

  function startTimer() {
    setIsRunning(true);
  }

  function pauseTimer() {
    setIsRunning(false);
  }

  function stopTimer() {
    setIsRunning(false);
    setTime(0);
  }

  const minutes = Math.floor(time / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10); 

  const formattedTime =
    String(minutes).padStart(2, "0") + ":" +
    String(seconds).padStart(2, "0") + ":" +
    String(milliseconds).padStart(2, "0");

  return (
    <div className="container">
      <div className="stopwatch">
        <h1>Stopwatch</h1>
        <p className="time">{formattedTime}</p>
        <div className="buttons">
          <button className="start" onClick={startTimer}>
            Start
          </button>
          <button className="pause" onClick={pauseTimer}>
            Pause
          </button>
          <button className="stop" onClick={stopTimer}>
            Stop
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;