import { useState, useEffect } from "react";

export default function ClickCounter() {
  const getInitialClicks = () => {
    const savedClicks = localStorage.getItem("clickCount");
    return savedClicks !== null ? JSON.parse(savedClicks) : 0;
  };
  const [clicks, setClicks] = useState(getInitialClicks);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  const resetClicks = () => {
    setClicks(0);
  };

  useEffect(() => {
    localStorage.setItem("clickCount", clicks);
  }, [clicks]);

  return (
    <div>
      <button onClick={handleClick}>Click {clicks}</button>
      <button onClick={resetClicks}>Reset cliks</button>
    </div>
  );
}
