import React, { useEffect, useState } from "react";
import { movies } from "../data";

function Movies() {
  return(
    <div>
      <div>{movies.title}</div>
      <div>{movies.time}</div>
      <div>{movies.genres}</div>
    </div>
  )
}

export default Movies;
