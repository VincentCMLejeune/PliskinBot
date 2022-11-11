import { useEffect, useState } from "react";

import AddExercise from "./add exercise/AddExercise";
import Header from "./header/Header";

import "./Fitness.css";

export default function Fitness({ fitnessData }) {
  const [showNewExercise, setShowNewExercise] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [fitnesssFilter, setFitnessFilter] = useState({
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
      {showNewExercise && <AddExercise />}
      <div className="fitness">
        <div className="fitness-laptop-message-left">
          Are you doing fitness with a laptop ?
        </div>
        <div id="title-glitched" title="Fitness">
          Fitness
        </div>
        <button onClick={() => setShowNewExercise(true)}>Add Fitness</button>
        <div className="fitnesss-filters">
          <label>
            <input
              type="checkbox"
              checked={fitnesssFilter.upper}
              onChange={() =>
                setFitnessFilter({
                  ...fitnesssFilter,
                  upper: !fitnesssFilter.upper,
                })
              }
            />
            Upper
          </label>
          <label>
            <input
              type="checkbox"
              checked={fitnesssFilter.lower}
              onChange={() =>
                setFitnessFilter({
                  ...fitnesssFilter,
                  lower: !fitnesssFilter.lower,
                })
              }
            />
            Lower
          </label>
          <label>
            <input
              type="checkbox"
              checked={fitnesssFilter.abs}
              onChange={() =>
                setFitnessFilter({
                  ...fitnesssFilter,
                  abs: !fitnesssFilter.abs,
                })
              }
            />
            Abs
          </label>
        </div>
        <div className="fitnesss-list">
          {fitnesssFilter.upper === true &&
            exercises.upper &&
            exercises.upper.length > 0 && (
              <>
                <div className="fitnesss-list-localization">Upper body</div>
                {exercises.upper.map((fitness, id) => (
                  <div key={id}>
                    <div>{fitness.muscle}</div>
                    <div>{fitness.weight}</div>
                  </div>
                ))}
              </>
            )}
          {fitnesssFilter.lower === true &&
            exercises.lower &&
            exercises.lower.length > 0 && (
              <>
                <div className="fitnesss-list-localization">Lower body</div>
                {exercises.lower.map((fitness, id) => (
                  <div key={id}>
                    <div>{fitness.muscle}</div>
                    <div>{fitness.weight}</div>
                  </div>
                ))}
              </>
            )}
          {fitnesssFilter.abs === true &&
            exercises.abs &&
            exercises.abs.length > 0 && (
              <>
                <div className="fitnesss-list-localization">Abs</div>
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
