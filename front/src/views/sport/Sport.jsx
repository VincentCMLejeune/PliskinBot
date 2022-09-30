import { useEffect, useState } from "react";

import "./Sport.css";

import Header from "../../components/header/Header";

import Addsport from "../../components/add sport/Addsport";

const axios = require("axios").default;

export default function Sport() {
  const [showNewSport, setShowNewSport] = useState(false);
  const [sports, setSports] = useState([]);
  const [sportsFilter, setSportFilter] = useState({
    upper: true,
    lower: true,
    abs: true,
  });

  useEffect(() => {
    getSports();
  }, []);

  // useEffect(() => {
  //   console.log(sportsFilter);
  // }, [sportsFilter]);

  // useEffect(() => {
  //   console.log(sports);
  // }, [sports]);

  const getSports = () => {
    axios
      .get("http://localhost:9000/fitness")
      .then((res) => {
        // console.log(res.data.fitness);
        const sortedFitness = {
          upper: [],
          lower: [],
          abs: [],
        };
        for (let sport of res.data.fitness) {
          if (sport.localization === "upper") {
            sortedFitness.upper.push(sport);
          } else if (sport.localization === "lower") {
            sortedFitness.lower.push(sport);
          } else if (sport.localization === "abs") {
            sortedFitness.abs.push(sport);
          }
        }
        setSports(sortedFitness);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      {showNewSport && <Addsport />}
      <div className="sport">
        <div className="sport-laptop-message-left">
          Are you doing sport with a laptop ?
        </div>
        <div id="title-glitched" title="Sport">
          Sport
        </div>
        <button onClick={() => setShowNewSport(true)}>Add Sport</button>
        <div className="sports-filters">
          <label>
            <input
              type="checkbox"
              checked={sportsFilter.upper}
              onChange={() =>
                setSportFilter({ ...sportsFilter, upper: !sportsFilter.upper })
              }
            />
            Upper
          </label>
          <label>
            <input
              type="checkbox"
              checked={sportsFilter.lower}
              onChange={() =>
                setSportFilter({ ...sportsFilter, lower: !sportsFilter.lower })
              }
            />
            Lower
          </label>
          <label>
            <input
              type="checkbox"
              checked={sportsFilter.abs}
              onChange={() =>
                setSportFilter({ ...sportsFilter, abs: !sportsFilter.abs })
              }
            />
            Abs
          </label>
        </div>
        <div className="sports-list">
          {sportsFilter.upper === true &&
            sports.upper &&
            sports.upper.length > 0 && (
              <>
                <div className="sports-list-localization">Upper body</div>
                {sports.upper.map((sport, id) => (
                  <div key={id}>
                    <div>{sport.muscle}</div>
                    <div>{sport.weight}</div>
                  </div>
                ))}
              </>
            )}
          {sportsFilter.lower === true &&
            sports.lower &&
            sports.lower.length > 0 && (
              <>
                <div className="sports-list-localization">Lower body</div>
                {sports.lower.map((sport, id) => (
                  <div key={id}>
                    <div>{sport.muscle}</div>
                    <div>{sport.weight}</div>
                  </div>
                ))}
              </>
            )}
          {sportsFilter.abs === true && sports.abs && sports.abs.length > 0 && (
            <>
              <div className="sports-list-localization">Abs</div>
              {sports.abs.map((sport, id) => (
                <div key={id}>
                  <div>{sport.muscle}</div>
                  <div>{sport.weight}</div>
                </div>
              ))}
            </>
          )}
        </div>
        <div className="sport-laptop-message-right">
          Are you doing sport with a laptop ?
        </div>
      </div>
    </>
  );
}
