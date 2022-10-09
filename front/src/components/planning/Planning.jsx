import axios from "axios";
import { useState, useEffect } from "react";

import "./Planning.css";

export default function Planning({ calendarData, setCalendarData }) {
  const [today, setToday] = useState(null);
  const [colorMap, setColorMap] = useState(null);
  const [occupationsCount, setOccupationsCount] = useState(null);
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
    const newOccupationsMap = {};
    const colors = ["yellow", "blue", "pink"];
    const calendarOccupations = ["free"];
    let idx = 0;
    for (let row of calendarData.planning) {
      if (calendarOccupations.indexOf(row.occupation) === -1) {
        newColorMap[row.occupation] = colors[idx];
        calendarOccupations.push(row.occupation);
        idx++;
      }
      if (newOccupationsMap[row.occupation]) {
        newOccupationsMap[row.occupation]++;
      } else {
        newOccupationsMap[row.occupation] = 1;
      }
    }
    setOccupationsCount(newOccupationsMap);
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

  const copyPlanningMessage = () => {
    const frenchMonths = [
      "de janvier",
      "de février",
      "de mars",
      "d'avril",
      "de mai",
      "de juin",
      "de juillet",
      "d'août",
      "de septembre",
      "d'octobre",
      "de novembre",
      "de décembre",
    ];
    let message = `Salut Francesca, j'espère que tu vas bien.
Voici mon planning pour le mois ${frenchMonths[today.getMonth()]} :`;
    for (const [client, days] of Object.entries(occupationsCount).slice(1)) {
      message += `
      * ${client} : ${days} jours`;
    }
    message += `
Bonne journée !`;
    navigator.clipboard.writeText(message);
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
            <div>
              {occupationsCount &&
                Object.keys(occupationsCount)
                  .slice(1)
                  .map((key, index) => (
                    <div key={index} className="Planning-calendar-count">
                      <div
                        className="Planning-calendar-cube"
                        style={{ backgroundColor: colorMap[key] }}
                      ></div>
                      <div>
                        {key} :{" "}
                        {occupationsCount[key] > 1
                          ? occupationsCount[key] + " days"
                          : "1 day"}
                      </div>
                    </div>
                  ))}
            </div>
            <button onClick={() => copyPlanningMessage()}>
              Generate work message
            </button>
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
              <div>
                {occupationsCount &&
                  Object.keys(occupationsCount).map((key, index) => (
                    <button key={index} onClick={() => setInputOccupation(key)}>
                      {key}
                    </button>
                  ))}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
