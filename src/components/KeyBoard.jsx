import React from "react";
import { keys } from "../data/data";
import Key from "./Key";

const KeyBoard = ({ bg }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {keys.map((key, index) => (
        <div key={index}>
          {key.map((k, index) => (
            <Key key={index} bg={bg} k={k} />
          ))}
        </div>
      ))}
      <br />
    </div>
  );
};

export default KeyBoard;
