import { useEffect, useState } from "react";

import "./Tech.css";

export default function Tech({ techData }) {
  useEffect(() => {
    console.log(techData);
  }, [techData]);

  return (
    <div className="Stellaris-tech">
      <div>{techData.name ? techData.name : techData.id}</div>
      <img
        src={require(`../../../assets/stellaris/${techData.id}.png`)}
        alt={techData.id}
      />
      <div>Tier {techData.tier}</div>
      {techData.desc && <div>{techData.desc}</div>}
    </div>
  );
}
