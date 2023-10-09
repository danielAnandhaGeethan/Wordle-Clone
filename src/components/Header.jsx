import React from "react";
import wordle from "../assets/wordle.png";

const Header = ({ bg, setBg, win, setWin }) => {
  return (
    <div
      className={`w-full h-[10%] flex justify-between py-2 px-10 items-center ${
        win ? "bg-[#348389] bg-opacity-30" : "bg-transparent"
      }`}
    >
      <div>
        <img src={wordle} alt="wordle" className="h-10 w-30" />
      </div>
      <div>
        <button
          className={`text-2xl rounded-full px-2 border ${
            bg === "bg-white"
              ? "border-black text-black"
              : "border-white text-white"
          }`}
          onClick={() => setBg(bg === "bg-white" ? "bg-black/90" : "bg-white")}
        >
          {bg === "bg-white" ? "DARK" : "LIGHT"}
        </button>
      </div>
    </div>
  );
};

export default Header;
