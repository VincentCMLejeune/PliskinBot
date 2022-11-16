import { useEffect, useState } from "react";

import AddExercise from "./add exercise/AddExercise";
import EditExercise from "./edit exercise/EditExercise";
import Header from "./header/Header";

import "./Fitness.css";

export default function Fitness({ fitnessData }) {
  const [showNewExercise, setShowNewExercise] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [exerciseToEdit, setExerciseToEdit] = useState(null);
  const [fitnessFilter, setFitnessFilter] = useState({
    upper: true,
    lower: true,
    abs: true,
  });

  useEffect(() => {
    const sortedExercises = {
      upper: [],
      lower: [],
      abs: [],
    };
    for (let fitness of fitnessData.fitness) {
      if (fitness.localization === "upper") {
        sortedExercises.upper.push(fitness);
      } else if (fitness.localization === "lower") {
        sortedExercises.lower.push(fitness);
      } else if (fitness.localization === "abs") {
        sortedExercises.abs.push(fitness);
      }
    }
    setExercises(sortedExercises);
  }, [fitnessData]);

  return (
    <>
      <Header />
      {showNewExercise && (
        <AddExercise setShowNewExercise={setShowNewExercise} />
      )}
      {exerciseToEdit !== null && (
        <EditExercise
          exerciseToEdit={exerciseToEdit}
          setExerciseToEdit={setExerciseToEdit}
        />
      )}
      <div className="fitness">
        <div className="fitness-laptop-message-left">
          Are you doing fitness with a laptop ?
        </div>
        <div id="title-glitched" title="Fitness">
          Fitness
        </div>
        <button onClick={() => setShowNewExercise(true)}>Add Exercise</button>
        <div className="fitness-filters">
          <label>
            <input
              type="checkbox"
              checked={fitnessFilter.upper}
              onChange={() =>
                setFitnessFilter({
                  ...fitnessFilter,
                  upper: !fitnessFilter.upper,
                })
              }
            />
            Upper
          </label>
          <label>
            <input
              type="checkbox"
              checked={fitnessFilter.lower}
              onChange={() =>
                setFitnessFilter({
                  ...fitnessFilter,
                  lower: !fitnessFilter.lower,
                })
              }
            />
            Lower
          </label>
          <label>
            <input
              type="checkbox"
              checked={fitnessFilter.abs}
              onChange={() =>
                setFitnessFilter({
                  ...fitnessFilter,
                  abs: !fitnessFilter.abs,
                })
              }
            />
            Abs
          </label>
        </div>
        <div className="fitness-list">
          {fitnessFilter.upper === true &&
            exercises.upper &&
            exercises.upper.length > 0 && (
              <>
                <div className="fitness-list-localization">Upper body</div>
                {exercises.upper.map((exercise, id) => (
                  <div key={id}>
                    <div>{exercise.muscle}</div>
                    <div>{exercise.weight}</div>
                    <div>{exercise.weightmarie}</div>
                    <button onClick={() => setExerciseToEdit(exercise)}>
                      Edit
                    </button>
                  </div>
                ))}
              </>
            )}
          {fitnessFilter.lower === true &&
            exercises.lower &&
            exercises.lower.length > 0 && (
              <>
                <div className="fitness-list-localization">Lower body</div>
                {exercises.lower.map((exercise, id) => (
                  <div key={id}>
                    <div>{exercise.muscle}</div>
                    <div>{exercise.weight}</div>
                    <div>{exercise.weightmarie}</div>
                    <button onClick={() => setExerciseToEdit(exercise)}>
                      Edit
                    </button>
                  </div>
                ))}
              </>
            )}
          {fitnessFilter.abs === true &&
            exercises.abs &&
            exercises.abs.length > 0 && (
              <>
                <div className="fitness-list-localization">Abs</div>
                {exercises.abs.map((exercise, id) => (
                  <div key={id}>
                    <div>{exercise.muscle}</div>
                    <div>{exercise.weight}</div>
                    <div>{exercise.weightmarie}</div>
                    <button onClick={() => setExerciseToEdit(exercise)}>
                      Edit
                    </button>
                  </div>
                ))}
              </>
            )}
        </div>
        <div className="fitness-laptop-message-right">
          Are you doing fitness with a laptop ?
        </div>
      </div>
    </>
  );
}
