import React from "react";
import Stat from "./Stat";
import "./Stats.css";

export default function Stats({ highlights }) {
  return (
    <div className="container stats">
      {highlights.map((s) => (<Stat key={s.label} {...s} />))}
    </div>
  );
}
