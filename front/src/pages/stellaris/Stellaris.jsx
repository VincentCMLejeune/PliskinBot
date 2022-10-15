import { useEffect, useState } from "react";

import Tech from "./tech/Tech";

import "./Stellaris.css";

export default function Stellaris({ stellarisData }) {
  // useEffect(() => {
  //   console.log(stellarisData);
  //   console.log(stellarisData.stellaris[104]);
  // }, [stellarisData]);
  const [engineeringTechs, setEngineeringTechs] = useState([]);
  const [physicsTechs, setPhysicsTechs] = useState([]);
  const [societyTechs, setSocietyTechs] = useState([]);

  const sortByTier = (techs) => {
    const tier1 = [];
    const tier2 = [];
    const tier3 = [];
    const tier4 = [];
    const tier5 = [];
    const tier6 = [];
    for (let tech in techs) {
      if (techs[tech].tier === 1) {
        tier1.push(techs[tech]);
      } else if (techs[tech].tier === 2) {
        tier2.push(techs[tech]);
      } else if (techs[tech].tier === 3) {
        tier3.push(techs[tech]);
      } else if (techs[tech].tier === 4) {
        tier4.push(techs[tech]);
      } else if (techs[tech].tier === 5) {
        tier5.push(techs[tech]);
      } else if (techs[tech].tier === 6) {
        tier6.push(techs[tech]);
      }
    }
    return [tier1, tier2, tier3, tier4, tier5, tier6];
  };

  useEffect(() => {
    const engineeringTechs = [];
    const physicsTechs = [];
    const societyTechs = [];
    for (const tech of stellarisData.stellaris) {
      if (tech.area === "engineering") {
        engineeringTechs.push(tech);
      } else if (tech.area === "physics") {
        physicsTechs.push(tech);
      } else if (tech.area === "society") {
        societyTechs.push(tech);
      } else {
        console.log("tech without area : ", tech);
      }
    }
    setEngineeringTechs(sortByTier(engineeringTechs));
    setPhysicsTechs(physicsTechs);
    setSocietyTechs(societyTechs);
  }, [stellarisData]);

  return (
    <div className="Stellaris">
      <div className="Stellaris-shadowed-background"></div>
      <div className="Stellaris-content">
        <h1>Stellaris</h1>
        <div>
          {/* <Tech techData={stellarisData.stellaris[104]} /> */}
          {/* {stellarisData.stellaris.map((tech) => (
            <Tech key={tech.id} techData={tech} />
          ))} */}
          <h2>Engineering</h2>
          <div className="Stellaris-content-category">
            {engineeringTechs.map((row) => (
              <div className="Stellaris-content-category-column">
                {row.map((tech) => (
                  <Tech key={tech.id} techData={tech} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
