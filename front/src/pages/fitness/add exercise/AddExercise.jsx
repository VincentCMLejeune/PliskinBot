import { useState } from "react";

import "./AddExercise.css";

// import axios from "axios";

export default function AddExercise({ setShowNewExercise }) {
  const [newExercise, setNewExercise] = useState({
    muscle: "",
    localization: "upper",
    weight: 20,
  });

  const postNewExercise = (e) => {
    e.preventDefault();
    const exerciseToPost = {
      muscle: newExercise.muscle,
      localization: newExercise.localization,
      weight: newExercise.weight,
    };
    console.log(exerciseToPost);
  };

  const decrementValue = (initialValue, decrement) => {
    return Math.max(initialValue - decrement, 0);
  };

  return (
    <>
      <div
        className="newexercise-shadowbackground"
        onClick={() => setShowNewExercise(false)}
      ></div>
      <div className="newexercise">
        <h1>NEW EXERCISE</h1>
        <form onSubmit={() => postNewExercise}>
          <label>Muscle:</label>
          <input
            type="text"
            value={newExercise.muscle}
            onChange={(e) =>
              setNewExercise({ ...newExercise, muscle: e.target.value })
            }
          />
          <label>Localization:</label>
          <input
            type="radio"
            id="upper"
            name="localization"
            value="upper"
            checked={newExercise.localization === "upper"}
            onChange={() =>
              setNewExercise({ ...newExercise, localization: "upper" })
            }
          />
          <label>Upper Body</label>
          <input
            type="radio"
            id="lower"
            name="localization"
            value="lower"
            checked={newExercise.localization === "lower"}
            onChange={() =>
              setNewExercise({ ...newExercise, localization: "lower" })
            }
          />
          <label>Lower Body</label>
          <input
            type="radio"
            id="abs"
            name="localization"
            value="abs"
            checked={newExercise.localization === "abs"}
            onChange={() =>
              setNewExercise({ ...newExercise, localization: "abs" })
            }
          />
          <label>Abs</label>

          <div>
            <label>Weight:</label>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewExercise({
                  ...newExercise,
                  weight: decrementValue(newExercise.weight, 10),
                });
              }}
            >
              -10
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewExercise({
                  ...newExercise,
                  weight: decrementValue(newExercise.weight, 5),
                });
              }}
            >
              -5
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewExercise({
                  ...newExercise,
                  weight: decrementValue(newExercise.weight, 1),
                });
              }}
            >
              -1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewExercise({
                  ...newExercise,
                  weight: decrementValue(newExercise.weight, 0.5),
                });
              }}
            >
              -0.5
            </button>
            <div>{newExercise.weight}</div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewExercise({
                  ...newExercise,
                  weight: newExercise.weight + 0.5,
                });
              }}
            >
              +0.5
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewExercise({
                  ...newExercise,
                  weight: newExercise.weight + 1,
                });
              }}
            >
              +1
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewExercise({
                  ...newExercise,
                  weight: newExercise.weight + 5,
                });
              }}
            >
              +5
            </button>
            <button
              onClick={(e) => {
                e.preventDefault();
                setNewExercise({
                  ...newExercise,
                  weight: newExercise.weight + 10,
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
