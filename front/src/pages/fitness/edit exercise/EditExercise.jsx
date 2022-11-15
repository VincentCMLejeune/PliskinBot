import { useState, useEffect } from "react";

import "./EditExercise.css";

// import axios from "axios";

export default function EditExercise({ exerciseToEdit, setExerciseToEdit }) {
  const [updatedExercise, setUpdatedExercise] = useState({
    muscle: exerciseToEdit.muscle,
    localization: exerciseToEdit.localization,
    weight: exerciseToEdit.weight,
  });

  const updateExercise = (e) => {
    e.preventDefault();
    const exerciseToPut = {
      muscle: updatedExercise.muscle,
      localization: updatedExercise.localization,
      weight: updatedExercise.weight,
    };
    console.log(exerciseToPut);
  };

  return (
    <>
      <div
        className="editexercise-shadowbackground"
        onClick={() => setExerciseToEdit(null)}
      ></div>
      <div className="editexercise">
        <h1>EDIT EXERCISE</h1>
        <form onSubmit={() => updateExercise}>
          <label>Muscle:</label>
          <input
            type="text"
            value={updatedExercise.muscle}
            onChange={(e) =>
              setUpdatedExercise({ ...updatedExercise, muscle: e.target.value })
            }
          />
          <label>Localization:</label>
          <input
            type="radio"
            id="upper"
            name="localization"
            value="upper"
            checked={updatedExercise.localization === "upper"}
            onChange={() =>
              setUpdatedExercise({ ...updatedExercise, localization: "upper" })
            }
          />
          <label>Upper Body</label>
          <input
            type="radio"
            id="lower"
            name="localization"
            value="lower"
            checked={updatedExercise.localization === "lower"}
            onChange={() =>
              setUpdatedExercise({ ...updatedExercise, localization: "lower" })
            }
          />
          <label>Lower Body</label>
          <input
            type="radio"
            id="abs"
            name="localization"
            value="abs"
            checked={updatedExercise.localization === "abs"}
            onChange={() =>
              setUpdatedExercise({ ...updatedExercise, localization: "abs" })
            }
          />
          <label>Abs</label>

          <div>
            <label>Weight:</label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setUpdatedExercise({
                  ...updatedExercise,
                  weight: updatedExercise.weight - 10,
                });
              }}
            >
              -10
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setUpdatedExercise({
                  ...updatedExercise,
                  weight: updatedExercise.weight - 5,
                });
              }}
            >
              -5
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setUpdatedExercise({
                  ...updatedExercise,
                  weight: updatedExercise.weight - 1,
                });
              }}
            >
              -1
            </button>
            <div>{updatedExercise.weight}</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setUpdatedExercise({
                  ...updatedExercise,
                  weight: updatedExercise.weight + 1,
                });
              }}
            >
              +1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setUpdatedExercise({
                  ...updatedExercise,
                  weight: updatedExercise.weight + 5,
                });
              }}
            >
              +5
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setUpdatedExercise({
                  ...updatedExercise,
                  weight: updatedExercise.weight + 10,
                });
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
