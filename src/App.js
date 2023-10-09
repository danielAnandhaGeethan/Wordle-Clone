import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { answer } from "./data/data";
import { values } from "./data/data";

const App = () => {
  const [bg, setBg] = useState("bg-white");
  const [row, setRow] = useState(0);
  const [win, setWin] = useState(false);

  const [data, setData] = useState([
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
    ["", "", "", "", "", ""],
  ]);

  const [equal, setEqual] = useState([[], [], [], [], [], []]);

  const reset = (e) => {
    e.preventDefault();

    setData([
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
      ["", "", "", "", "", ""],
    ]);

    setEqual([[], [], [], [], [], []]);
    setRow(0);

    for (const key in values) {
      values[key] = "bg-transparent";
    }
  };

  return (
    <div className={`max-w-[1520px] h-screen ${bg}`}>
      <Header bg={bg} setBg={setBg} win={win} />
      <Body
        data={data}
        row={row}
        setRow={setRow}
        setData={setData}
        answer={answer}
        bg={bg}
        equal={equal}
        setEqual={setEqual}
        win={win}
        setWin={setWin}
        reset={reset}
      />
    </div>
  );
};

export default App;
