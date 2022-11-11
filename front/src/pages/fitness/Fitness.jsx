import { useEffect, useState } from "react";

import AddExercise from "./add exercise/AddExercise";
import Header from "./header/Header";

import "./Fitness.css";

export default function Fitness({ fitnessData }) {
  const [showNewExercise, setShowNewExercise] = useState(false);
  const [exercises, setExercises] = useState([]);
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
      <div className="fitness">
        <div className="fitness-laptop-message-left">
          Are you doing fitness with a laptop ?
        </div>
        <div id="title-glitched" title="Fitness">
          Fitness
        </div>
        <button onClick={() => setShowNewExercise(true)}>Add Fitness</button>
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
                {exercises.upper.map((fitness, id) => (
                  <div key={id}>
                    <div>{fitness.muscle}</div>
                    <div>{fitness.weight}</div>
                  </div>
                ))}
              </>
            )}
          {fitnessFilter.lower === true &&
            exercises.lower &&
            exercises.lower.length > 0 && (
              <>
                <div className="fitness-list-localization">Lower body</div>
                {exercises.lower.map((fitness, id) => (
                  <div key={id}>
                    <div>{fitness.muscle}</div>
                    <div>{fitness.weight}</div>
                  </div>
                ))}
              </>
            )}
          {fitnessFilter.abs === true &&
            exercises.abs &&
            exercises.abs.length > 0 && (
              <>
                <div className="fitness-list-localization">Abs</div>
                {exercises.abs.map((fitness, id) => (
                  <div key={id}>
                    <div>{fitness.muscle}</div>
                    <div>{fitness.weight}</div>
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
