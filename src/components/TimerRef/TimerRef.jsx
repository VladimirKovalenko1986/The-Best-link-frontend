import { useState, useEffect, useRef } from "react";

const Timer = () => {
  const [clicks, setClicks] = useState(0);
  const intervalIdRef = useRef();

  useEffect(() => {
    intervalIdRef.current = setInterval(() => {
      console.log(Date.now());
    }, 1000);

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, []);

  const stopInterval = () => {
    clearInterval(intervalIdRef.current);
  };

  return (
    <div>
      <p>Timer</p>
      <button onClick={() => setClicks(clicks + 1)}>{clicks}</button>
      <button onClick={stopInterval}>Stop interval</button>
    </div>
  );
};

export default function TimerRef() {
  const [isVisible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && <Timer />}
    </div>
  );
}
