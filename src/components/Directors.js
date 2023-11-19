import React from "react";
import { directors } from "../data";

function Directors() {
  return (
  <div>
    <div>{directors.name}</div>
    <div>{directors.movies}</div>
  </div>)
}

export default Directors;
