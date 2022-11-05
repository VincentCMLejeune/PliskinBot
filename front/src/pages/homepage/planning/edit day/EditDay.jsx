import axios from "axios";
import { useState, useEffect } from "react";

import "./EditDay.css";

export default function EditDay({ dayData }) {
  const [inputOccupation, setInputOccupation] = useState("");

  return (
    <>
      <div className="planning-edit-day-shadowbackground"></div>
      <div className="planning-edit-day">Day {dayData}</div>
    </>
  );
}
