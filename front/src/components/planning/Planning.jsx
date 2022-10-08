import axios from "axios";
import { useState, useEffect } from "react";

import "./Planning.css";

export default function Planning({ calendarData, setCalendarData }) {
  const [today, setToday] = useState(null);
  const [colorMap, setColorMap] = useState(null);
  const [inputOccupation, setInputOccupation] = useState("");
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
    const newColorMap = { free: "green" };
    const colors = ["yellow", "blue", "pink"];
    const calendarOccupations = ["free"];
    let idx = 0;
    for (let row of calendarData.planning) {
      if (calendarOccupations.indexOf(row.occupation) === -1) {
        newColorMap[row.occupation] = colors[idx];
        calendarOccupations.push(row.occupation);
        idx++;
      }
    }
    setColorMap(newColorMap);
  }, [calendarData]);

  const saveOccupation = (e) => {
    e.preventDefault();
    const urlMonth =
      "http://localhost:9000/planning/" +
      today.getFullYear() +
      "/" +
      today.getMonth();
    const url = urlMonth + "/" + today.getDate();
    const stopIterating = inputOccupation;
    axios
      .put(url, {
        occupation: stopIterating,
      })
      .then((res) => {
        axios
          .get(urlMonth)
          .then((res) => setCalendarData(res.data))
          .catch((err) => console.log(err));
        setInputOccupation("");
      })
      .catch((err) => {
        console.log(err);
        setInputOccupation("");
      });
  };

  return (
    <>
      {today && (
        <div>
          <div>
            <div>{months[today.getMonth()]}</div>
            <div className="Planning-calendar-cubes">
              {colorMap &&
                calendarData.planning.map((day, idx) => (
                  <div
                    key={idx}
                    className="Planning-calendar-cube"
                    style={{ backgroundColor: colorMap[day.occupation] }}
                  >
                    {idx + 1}
                  </div>
                ))}
            </div>
          </div>
          <h1>Today is {days[today.getDay()]}</h1>
          {today.getDay() === 6 || today.getDay() === 0 ? (
            <div>Yay, no work</div>
          ) : (
            <div>
              <label>What's the plan today ?</label>
              <input
                type="text"
                value={inputOccupation}
                onChange={(e) => setInputOccupation(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && saveOccupation(e)}
              />
              <button onClick={(e) => saveOccupation(e)}>SAVE</button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
