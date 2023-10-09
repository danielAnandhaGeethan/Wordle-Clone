import React from "react";
import Box from "./Box";

const Row = ({ datum, row, bg, equal }) => {
  const eq = equal[row].length > 0 ? equal[row] : new Array(6).fill("");

  return (
    <div className="flex justify-center gap-4 mb-1">
      {datum.map((d, index) => (
        <Box d={d} key={index} bg={bg} check={eq[index]} />
      ))}
    </div>
  );
};

export default Row;
