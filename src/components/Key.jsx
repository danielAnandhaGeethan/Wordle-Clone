import React from "react";
import { values } from "../data/data";

const Key = ({ k, bg }) => {
  return (
    <div
      className={`relative w-10 h-10 border-2 border-[#787878] m-1 flex justify-center items-center ${
        bg === "bg-white" ? "text-black" : "text-white"
      } ${values[k]} ${values[k] === "bg-gray-300" ? "" : ""}`}
    >
      <h2 className="font-bold">{k}</h2>
      <div
        className={`${
          values[k] !== "bg-gray-300" ? "hidden" : ""
        } absolute border-t-2 ${
          bg === "bg-white" ? "border-white" : "border-black"
        } z-10 rotate-45 w-full`}
      >
        <h2 className="hidden"></h2>
      </div>
    </div>
  );
};

export default Key;
