import React, { useEffect, useState } from "react";
import { values } from "../data/data";

const Box = ({ d, bg, check }) => {
  const [bgColor, setBgColor] = useState("");

  useEffect(() => {
    if (check === "") {
      setBgColor("bg-transparent");
    } else {
      if (check === 2) {
        setBgColor("bg-green-500");
      } else if (check === 1) {
        setBgColor("bg-yellow-400");
      } else {
        setBgColor("bg-gray-300");
      }
    }
  }, [check]);

  return (
    <div
      className={`border-2 ${
        bg === "bg-white" ? "border-black" : "border-white"
      } w-[55px] h-[55px] flex justify-center items-center transition-colors duration-500 ease-in-out ${bgColor}`}
    >
      <h2
        className={`text-2xl ${
          bg === "bg-white" ? "text-black" : "text-white"
        }`}
      >
        {d}
      </h2>
    </div>
  );
};

export default Box;
