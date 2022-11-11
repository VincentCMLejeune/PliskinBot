import { useState, useEffect } from "react";

import "./Loading.css";

export default function Loading({
  calendarData,
  githubData,
  testData,
  fitnessData,
  stellarisData,
  setDataLoaded,
}) {
  const [timePassed, setTimePassed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimePassed((timePassed) => timePassed + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="Loading">
      <h1>Loading...</h1>
      <div className="Loading-items">
        <ul>
          <li className={testData !== null ? "Loaded-item" : ""}>Test data</li>
          <li className={fitnessData !== null ? "Loaded-item" : ""}>
            Fitness data
          </li>
          <li className={calendarData !== null ? "Loaded-item" : ""}>
            Calendar data
          </li>
          <li className={stellarisData !== null ? "Loaded-item" : ""}>
            Stellaris data
          </li>
          <li className={githubData !== null ? "Loaded-item" : ""}>
            GitHub data
          </li>
        </ul>
      </div>
      <div className="Loading-period">Loading for {timePassed} seconds</div>
      <button onClick={() => setDataLoaded(true)}>Force Load</button>
    </div>
  );
}
