import React from "react";
import { GrClear } from "react-icons/gr";

const Buttons = ({ check, reset }) => {
  return (
    <div className="mb-3 flex justify-center items-center gap-3">
      <div>
        <button
          onClick={(e) => check(e)}
          className="bg-green-600 text-2xl px-2 rounded-full"
        >
          WordCheck
        </button>
      </div>
      <div>
        <button onClick={(e) => reset(e)} className="translate-y-1">
          <GrClear size={28} style={{ color: "red" }} />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
