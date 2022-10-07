import { useState, useEffect } from "react";

import "./Today.css";

// import axios from "axios";

export default function Today() {
  const [today, setToday] = useState(null);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  useEffect(() => {
    setToday(new Date());
  }, []);

  // useEffect(() => {
  //   console.log(today);
  // }, [today]);

  return (
    <>
      {today && (
        <div>
          <h1>Today is {days[today.getDay()]}</h1>
        </div>
      )}
    </>
  );
}
