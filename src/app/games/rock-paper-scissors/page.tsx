"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";

import { useState, useEffect } from "react";
import Button from "@/app/components/button";
import { motion } from "framer-motion";
import BackButton from "@/app/components/backButton";

const zero = () => {
  return 0;
};
const RockPaperScissor = () => {
  const choices = ["rock", "paper", "scissors"];
  // randomize the computer's choice from the start
  const [computerChoice, setComputerChoice] = useState(
    choices[Math.floor(Math.random() * choices.length)]
  );
  const [userPoints, setUserPoints] = useState(() => zero());
  const [computerPoints, setComputerPoints] = useState(() => zero());
  const [color, setColor] = useState("");
  const [feedback, setFeedback] = useState("");
  const [level, setLevel] = useState(() => zero());
  const [customLevel, setCustomLevel] = useState(() => zero());
  const [max, setMax] = useState(() => zero());
  const [modalText, setModalText] = useState("");
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (level === 3) {
      setMax(3);
    } else if (level === 5) {
      setMax(5);
    } else if (level === customLevel) {
      setMax(customLevel);
    }
  }, [level, customLevel]);

  useEffect(() => {
    // max level is 3
    if (max === 3 || max === 5) {
      if (userPoints + computerPoints === max) {
        if (userPoints > computerPoints) {
          setModalText("You win");
          setColor("text-green-500");
        } else if (userPoints < computerPoints) {
          setModalText("You lose");
          setColor("text-red-500");
        } else if (userPoints === computerPoints) {
          setModalText("It's a draw");
          setColor("text-yellow-500");
        }
        setModal(true);
      }
    }
    // max level is custom
    if (customLevel && max === customLevel) {
      if (userPoints + computerPoints === customLevel) {
        if (userPoints > computerPoints) {
          setModalText("You win");
        } else if (userPoints < computerPoints) {
          setModalText("You lose");
        } else if (userPoints === computerPoints) {
          setModalText("It's a draw");
        }
        setModal(true);
      }
    }
  }, [computerPoints, customLevel, max, userPoints]);

  const handleCustomLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomLevel(parseFloat(value));
  };

  const pickYourChampion = (item: string) => {
    // on each click or choice made by user, re-choose the computer's choice
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);

    if (item === choices[0]) {
      //rock
      if (computerChoice == choices[1]) {
        // paper
        setFeedback("You lose");
        setColor("text-red-500");
        setComputerPoints((prevComputerPoints) => prevComputerPoints + 1);
      } else if (computerChoice == choices[2]) {
        // scissors
        setFeedback("You win");
        setColor("text-green-500");
        setUserPoints((prevUserPoints) => prevUserPoints + 1);
      } else if (computerChoice == choices[0]) {
        // rock
        setFeedback("It's a draw");
        setColor("text-yellow-500");
        setComputerPoints((prevComputerPoints) => prevComputerPoints + 0.5);
        setUserPoints((prevUserPoints) => prevUserPoints + 0.5);
      }
    }

    if (item === choices[1]) {
      // paper
      if (computerChoice == choices[0]) {
        // rock
        setFeedback("You win");
        setColor("text-green-500");
        setUserPoints((prevUserPoints) => prevUserPoints + 1);
      } else if (computerChoice == choices[2]) {
        // scissors
        setFeedback("You lose");
        setColor("text-red-500");
        setComputerPoints((prevComputerPoints) => prevComputerPoints + 1);
      } else if (computerChoice == choices[1]) {
        // paper
        setFeedback("It's a draw");
        setColor("text-yellow-500");
        setComputerPoints((prevComputerPoints) => prevComputerPoints + 0.5);
        setUserPoints((prevUserPoints) => prevUserPoints + 0.5);
      }
    }

    if (item === choices[2]) {
      // scissors
      if (computerChoice == choices[0]) {
        // rock
        setFeedback("You lose");
        setColor("text-red-500");
        setComputerPoints((prevComputerPoints) => prevComputerPoints + 1);
      } else if (computerChoice == choices[1]) {
        // paper
        setFeedback("You win");
        setColor("text-green-500");
        setUserPoints((prevUserPoints) => prevUserPoints + 1);
      } else if (computerChoice == choices[2]) {
        // scissors
        setFeedback("It's a draw");
        setColor("text-yellow-500");
        setComputerPoints((prevComputerPoints) => prevComputerPoints + 0.5);
        setUserPoints((prevUserPoints) => prevUserPoints + 0.5);
      }
    }

    console.log(computerChoice);
  };

  return (
    <main className="relative flex flex-col items-center justify-between py-20">
      <div className="absolute left-10 lg:left-24 top-5 lg:top-16">
        <BackButton />
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`absolute top-1/3 z-50 ${
          modal ? "flex" : "hidden"
        } items-center justify-center flex-col gap-8 p-9 bg-black border-2 border-dashed border-gray-600 md:w-1/3`}
      >
        <p className={`font-semibold ${color}`}>{modalText}</p>
        <div className="gap-10 w-full flex items-center justify-around">
          <Button
            text={`Restart`}
            standard
            click={() => {
              setModal(false);
              setFeedback("");
              setUserPoints(0);
              setComputerPoints(0);
            }}
          ></Button>
          <Button
            text={`Choose round`}
            click={() => {
              setLevel(0);
              setUserPoints(0);
              setComputerPoints(0);
              setFeedback("");
              setModal(false);
            }}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`w-fit flex items-center justify-center flex-col bg-black text-[#f4f4f4] gap-7 p-12 rounded-lg shadow-lg shadow-orange-400 border-2 border-orange-500 ${
          level ? `hidden` : `flex`
        }`}
      >
        <Button text="Rounds of 3" click={() => setLevel(3)} standard />
        <Button text="Rounds of 5" click={() => setLevel(5)} standard />
        <div className="flex flex-col-reverse md:flex-row gap-4 items-center justify-center">
          <Button
            text="Set"
            click={() => {
              setLevel(customLevel);
            }}
            standard
          />
          <input
            type="number"
            placeholder="Enter number of rounds"
            className="border-2 border-orange-500 p-2 rounded-md w-fit ml-2 bg-transparent text-orange-500"
            onChange={handleCustomLevelChange}
          />
        </div>
      </motion.div>
      {level ? (
        <>
          <h1 className="flex items-start justify-center flex-col w-fit font-semibold text-3xl">
            <span className="first-letter:text-orange-500">Rock</span>{" "}
            <span className="first-letter:text-orange-500">Paper</span>{" "}
            <span className="first-letter:text-orange-500">Scissors</span>
          </h1>
          <p className={`font-semibold ${color}`}>{feedback}</p>
          <div className="flex items-center justify-evenly mt-20 md:mt-32 w-full transition-all">
            <div
              onClick={() => pickYourChampion("rock")}
              className=" text-orange-500"
            >
              <FontAwesomeIcon
                icon={faHandRock}
                className="p-5 scale-[1.5] md:scale-[3] border-2 border-gray-600 border-dashed rounded-full cursor-pointer hover:border-orange-500"
              />
            </div>
            <div
              onClick={() => pickYourChampion("paper")}
              className=" text-orange-500 md:my-0"
            >
              <FontAwesomeIcon
                icon={faHandPaper}
                className="p-5 scale-[1.5] md:scale-[3] border-2 border-gray-600 border-dashed rounded-full cursor-pointer hover:border-orange-500"
              />
            </div>
            <div
              onClick={() => pickYourChampion("scissors")}
              className=" text-orange-500"
            >
              <FontAwesomeIcon
                icon={faHandScissors}
                className="p-5 scale-[1.5] md:scale-[3] border-2 border-gray-600 border-dashed rounded-full cursor-pointer hover:border-orange-500"
              />
            </div>
          </div>
          <div className="mt-32">
            <p>You: {userPoints}</p>
            <p>Computer: {computerPoints}</p>
          </div>
        </>
      ) : (
        ""
      )}
    </main>
  );
};

export default RockPaperScissor;
