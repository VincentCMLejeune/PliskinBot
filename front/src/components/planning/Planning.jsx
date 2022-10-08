import { useState, useEffect } from "react";

import "./Planning.css";

export default function Planning({ calendarData }) {
  const [today, setToday] = useState(null);
  const [colorMap, setColorMap] = useState({
    free: "green",
  });
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
          <div>
            <div>{months[today.getMonth()]}</div>
            <div className="Planning-calendar-cubes">
              {calendarData.planning.map((day, idx) => (
                <div
                  key={idx}
                  className="Planning-calendar-cube"
                  style={{ backgroundColor: colorMap[day.occupation] }}
                ></div>
              ))}
            </div>
          </div>
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
