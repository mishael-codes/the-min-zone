"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/app/components/button";
import { randomize } from "@/app/functions/number-guessing/randomize";
const NumberGuessing = () => {
  const [level, setLevel] = useState("");
  const [min] = useState(1);
  const [max, setMax] = useState(0);
  const [randomizedNumber, setRandomizedNumber] = useState(0);

  useEffect(() => {
    if (level === "easy") {
      setMax(10);
    } else if (level === "medium") {
      setMax(100);
    } else if (level === "hard") {
      setMax(1000);
    }
  }, [level]);

  useEffect(() => {
    if (max > 0) {
      const value = randomize(min, max);
      setRandomizedNumber(value);
      console.log(value);
    }
  }, [max, min]);

  const checkNumber = () => {
    const guess = document.querySelector("input") as HTMLInputElement;
    if (parseInt(guess.value) === randomizedNumber) {
      alert("You got it right!");
    } else {
      alert("Try again");
    }
  }

  return (
    <div className="flex items-center justify-center max-w-screen min-h-screen">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`flex items-center justify-center flex-col bg-black text-[#f4f4f4] gap-7 p-12 rounded-lg shadow-lg shadow-orange-400 border-2 border-orange-500 ${
          level ? `hidden` : `flex`
        }`}
      >
        <Button text="Easy" click={() => setLevel("easy")} standard />
        <Button text="Medium" click={() => setLevel("medium")} standard />
        <Button text="Hard" click={() => setLevel("hard")} standard />
      </motion.div>
      {level ? (
        <div className="flex items-center justify-start flex-col min-h-screen gap-14 py-20">
          <div className="text-center flex items-center justify-center flex-col gap-5">
            <h1 className="flex items-start justify-center flex-col w-fit font-semibold text-3xl">
              <span className="first-letter:text-orange-500">Guess</span>{" "}
              <span className="first-letter:text-orange-500">The</span>{" "}
              <span className="first-letter:text-orange-500">Number</span>
            </h1>
            <p>
              Guess the number between{" "}
              <span className="text-orange-500">{min}</span> and{" "}
              <span className="text-orange-500">{max}</span>
            </p>
          </div>
          <div className="flex items-center justify-center flex-col gap-4">
            <input
              type="number"
              className="w-full p-2 border-2 bg-transparent border-orange-500 rounded-lg focus:outline-none focus:border-orange-500 caret-orange-500"
            />
            <Button text="Guess" click={checkNumber} standard />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default NumberGuessing;
