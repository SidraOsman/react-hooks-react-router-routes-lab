import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <div>{actors.name}</div>
      <div>{actors.movies}</div>
    </div>
  )
}

export default Actors;
