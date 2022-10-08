import { useState, useEffect } from "react";

import "./Today.css";

export default function Today({ calendarData }) {
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
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  useEffect(() => {
    setToday(new Date());
  }, []);

  useEffect(() => {
    console.log(calendarData);
  }, [calendarData]);

  return (
    <>
      {today && (
        <div>
          <h1>Today is {days[today.getDay()]}</h1>
          {today.getDay() === 6 || today.getDay() === 0 ? (
            <div>Yay, no work</div>
          ) : (
            <div>Work, bitch</div>
          )}
        </div>
      )}
    </>
  );
}
