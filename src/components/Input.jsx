import React from "react";

const Input = ({ word, changeBox }) => {
  return (
    <div className="w-full">
      <input
        type="text"
        value={word}
        maxLength={6}
        className="w-[20%] border border-black rounded-xl p-1 focus:outline-none"
        onChange={(e) => changeBox(e)}
      />
    </div>
  );
};

export default Input;
