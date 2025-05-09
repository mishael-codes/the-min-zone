"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/app/components/button";
import { randomize } from "@/app/functions/number-guessing/randomize";
import BackButton from "@/app/components/backButton";
const NumberGuessing = () => {
  const [level, setLevel] = useState("");
  const [min] = useState(1);
  const [max, setMax] = useState(0);
  const [guess, setGuess] = useState(0);
  const [numberOfGuesses, setNumberOfGuesses] = useState(0);
  const [randomizedNumber, setRandomizedNumber] = useState(0);
  const [numberOfPlays, setNumberOfPlays] = useState(0)
  const [showOrHide, setShowOrHide] = useState("hidden")
  const [color, setColor] = useState("");
  const [feedback, setFeedback] = useState("");

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

  const chooseNewRandomNumber = () => {
    const value = randomize(min, max);
    setRandomizedNumber(value);
    setColor("");
    setFeedback("");
    setShowOrHide("hidden")
    setNumberOfPlays(numberOfPlays + 1)
    console.log(value);
  };

  const checkForGuess = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setGuess(parseInt(value));
  };

  const checkIfGuessIsCorrect = () => {
    if (guess === randomizedNumber) {
      setFeedback("You got it right!");
      setColor("text-green-500");
      setShowOrHide("")
    } else if (
      guess + 2 === randomizedNumber ||
      guess + 1 === randomizedNumber ||
      guess - 2 === randomizedNumber ||
      guess - 1 === randomizedNumber
    ) {
      setFeedback("So close, but not quite");
      setColor("text-yellow-500");
    } else if(guess > max){
      setFeedback("Guess is higher than the specified range")
      setColor("text-yellow-500")
    } else {
      setFeedback("Nope, not this time");
      setColor("text-red-500");
    }
    setNumberOfGuesses(numberOfGuesses + 1);
  };

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
          <div className="absolute left-10 lg:left-24 top-5 lg:top-16">
            <BackButton />
          </div>
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
          <p className={`font-semibold ${color}`}>{feedback}</p>
          <div className="flex items-center justify-center flex-col gap-4">
            <input
              type="number"
              onChange={checkForGuess}
              className="w-full p-2 border-2 bg-transparent border-orange-500 rounded-lg focus:outline-none focus:border-orange-500 caret-orange-500"
            />
            <div className="flex items-center justify-between flex-col gap-5 w-full">
              <Button text="Guess" click={checkIfGuessIsCorrect} standard />
              <div className={`${showOrHide}`}>
                <Button text="Next" click={chooseNewRandomNumber} standard />
              </div>
            </div>
          </div>
          <div>
            <p>Number of Guesses: {numberOfGuesses}</p>
            <p>Number of Plays: {numberOfPlays}</p>
          </div>
          <Button
            text="Levels"
            click={() => {
              setLevel("");
              setNumberOfGuesses(0);
              setNumberOfPlays(0);
              setFeedback("");
              setColor("");
            }}
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
export default NumberGuessing;
