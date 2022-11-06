import { useState, useEffect } from "react";

import "./EditDay.css";

export default function EditDay({ dayToEdit, setDayToEdit, saveOccupation }) {
  const [inputEditOccupation, setInputEditOccupation] = useState("");

  useEffect(() => {
    console.log(dayToEdit);
  }, [dayToEdit]);

  return (
    <>
      <div className="planning-edit-day-shadowbackground"></div>
      <div className="planning-edit-day">
        <div>
          <div>Day : {dayToEdit.date}</div>
          <div>Occupation : {dayToEdit.occupation}</div>
        </div>
        <div>
          <input
            type="text"
            value={inputEditOccupation}
            onChange={(e) => setInputEditOccupation(e.target.value)}
          />
        </div>
        <div>
          <button
            onClick={(e) => {
              saveOccupation(e, inputEditOccupation, dayToEdit.day);
              setInputEditOccupation("");
              setDayToEdit(null);
            }}
          >
            CONFIRM
          </button>
          <button onClick={() => setDayToEdit(null)}>CANCEL</button>
        </div>
      </div>
    </>
  );
}
