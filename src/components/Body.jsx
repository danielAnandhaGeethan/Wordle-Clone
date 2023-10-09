import React, { useEffect, useState } from "react";
import Row from "./Row";
import KeyBoard from "./KeyBoard";
import { values } from "../data/data";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";
import Buttons from "./Buttons";
import Input from "./Input";
const Body = ({
  data,
  row,
  setRow,
  setData,
  answer,
  bg,
  equal,
  setEqual,
  win,
  setWin,
  reset,
}) => {
  const [word, setWord] = useState("");
  let url = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  console.log(answer);

  useEffect(() => {
    if (row === 6 && !win) {
      setTimeout(() => {
        enqueueSnackbar("GIVE IT ANOTHER GO", {
          variant: "info",
          autoHideDuration: 3000,
        });
      }, 400);
    }
  }, [row, win]);

  const changeBox = (e) => {
    if (row > 5) return;

    let x = e.target.value.toUpperCase();
    setWord(x);

    const newData = [...data];
    newData[row] = x.split("");

    for (let i = 0; i < 5 - x.length; i++) {
      newData[row].push("");
    }

    setData(newData);
  };

  const check = async (e) => {
    e.preventDefault();

    if (row > 5) return;

    const given = word;
    const newEqual = [...equal];

    try {
      await axios.get(`${url}${given.toLowerCase()}`);
    } catch (err) {
      enqueueSnackbar("Invaid Word", {
        variant: "error",
        autoHideDuration: 3000,
      });
      return;
    }

    let cnt = 0;
    for (let i = 0; i < given.length; i++) {
      if (given[i] === answer[i]) {
        cnt += 1;
        equal[row].push(2);
        values[given[i]] = "bg-green-500";
      } else if (answer.includes(given[i])) {
        equal[row].push(1);
        values[given[i]] = "bg-yellow-400";
      } else {
        equal[row].push(0);
        values[given[i]] = "bg-gray-300";
      }
    }

    if (cnt === 5) {
      setWin(true);
    }
    setEqual(newEqual);
    setWord("");
    if (word.length === 5) setRow((prev) => prev + 1);
  };

  return (
    <div
      className={`w-[100%] flex-col text-center items-center justify-center ${
        win ? "bg-[#348389] bg-opacity-30" : "bg-transparent"
      }`}
    >
      <SnackbarProvider />

      <div className="w-[100%] h-full mb-3 flex justify-center">
        <div className="w-full lg:w-[80%] lg:translate-x-[150px]">
          {data.map((datum, index) => (
            <Row
              datum={datum}
              key={index}
              row={index}
              bg={bg}
              equal={equal}
              reset={reset}
            />
          ))}
        </div>
        <div className="hidden lg:block mr-4">
          <KeyBoard bg={bg} />
        </div>
      </div>

      <Buttons check={check} reset={reset} />
      <Input word={word} changeBox={changeBox} />

      <h2
        className={`${
          win ? "opacity-100" : "opacity-0"
        } text-[600%] text-red-500 z-10 transition-opacity delay-1000 font-bold -translate-y-[230%]`}
      >
        CRACKED
      </h2>
    </div>
  );
};

export default Body;
