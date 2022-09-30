import { useEffect, useState } from "react";

import "./Addsport.css";

const axios = require("axios").default;

export default function Addsport({ setShowNewSport, getSports }) {
  const [newSport, setNewSport] = useState({
    muscle: "",
    localization: "upper",
    weight: 20,
  });
  const [selectedLocalization, setSelectedLocalization] =
    useState("Upper Body");

  const postNewSport = (e) => {
    e.preventDefault();
    const sportToPost = {
      muscle: newSport.muscle,
      localization: newSport.localization,
      weight: newSport.weight,
    };
    console.log(sportToPost);
  };

  useEffect(() => {
    console.log(newSport);
  }, [newSport]);

  return (
    <>
      <div className="newsport-shadowbackground"></div>
      <div className="newsport">
        <h1>NEW SPORT</h1>
        <form onSubmit={() => postNewSport}>
          <label>Muscle:</label>
          <input
            type="text"
            value={newSport.muscle}
            onChange={(e) =>
              setNewSport({ ...newSport, muscle: e.target.value })
            }
          />
          <label>Localization:</label>
          <input
            type="radio"
            id="upper"
            name="localization"
            value="upper"
            checked={newSport.localization === "upper"}
            onChange={() => setNewSport({ ...newSport, localization: "upper" })}
          />
          <label>Upper Body</label>
          <input
            type="radio"
            id="lower"
            name="localization"
            value="lower"
            checked={newSport.localization === "lower"}
            onChange={() => setNewSport({ ...newSport, localization: "lower" })}
          />
          <label>Lower Body</label>
          <input
            type="radio"
            id="abs"
            name="localization"
            value="abs"
            checked={newSport.localization === "abs"}
            onChange={() => setNewSport({ ...newSport, localization: "abs" })}
          />
          <label>Abs</label>

          <div>
            <label>Weight:</label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewSport({ ...newSport, weight: newSport.weight - 10 });
              }}
            >
              -10
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewSport({ ...newSport, weight: newSport.weight - 5 });
              }}
            >
              -5
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewSport({ ...newSport, weight: newSport.weight - 1 });
              }}
            >
              -1
            </button>
            <div>{newSport.weight}</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewSport({ ...newSport, weight: newSport.weight + 1 });
              }}
            >
              +1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewSport({ ...newSport, weight: newSport.weight + 5 });
              }}
            >
              +5
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewSport({ ...newSport, weight: newSport.weight + 10 });
              }}
            >
              +10
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
