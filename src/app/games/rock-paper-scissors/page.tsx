"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandRock } from "@fortawesome/free-solid-svg-icons";
import { faHandScissors } from "@fortawesome/free-solid-svg-icons";
import { faHandPaper } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
const RockPaperScissor = () => {
  const choices = ["rock", "paper", "scissors"];
  // randomize the computer's choice from the start
  const [computerChoice, setComputerChoice] = useState(
    choices[Math.floor(Math.random() * choices.length)]
  );
  const [userPoints, setUserPoints] = useState(0);
  const [computerPoints, setComputerPoints] = useState(0);
  const [color, setColor] = useState("");
  const [feedback, setFeedback] = useState("");

  const pickYourChampion = (item: string) => {
    // on each click or choice made by user, re-choose the computer's choice
    setComputerChoice(choices[Math.floor(Math.random() * choices.length)]);

    if (item === choices[0]) {
      //rock
      if (computerChoice == choices[1]) {
        // paper
        setFeedback("You lose");
        setColor("text-red-500");
        setComputerPoints(computerPoints + 1);
      } else if (computerChoice == choices[2]) {
        // scissors
        setFeedback("You win");
        setColor("text-green-500");
        setUserPoints(userPoints + 1);
      } else if (computerChoice == choices[0]) {
        // rock
        setFeedback("It's a draw");
        setColor("text-yellow-500");
        setComputerPoints(computerPoints + 0.5);
        setUserPoints(userPoints + 0.5);
      }
    }

    if (item === choices[1]) {
      // paper
      if (computerChoice == choices[0]) {
        // rock
        setFeedback("You win");
        setColor("text-green-500");
        setUserPoints(userPoints + 1);
      } else if (computerChoice == choices[2]) {
        // scissors
        setFeedback("You lose");
        setColor("text-red-500");
        setComputerPoints(computerPoints + 1);
      } else if (computerChoice == choices[1]) {
        // paper
        setFeedback("It's a draw");
        setColor("text-yellow-500");
        setComputerPoints(computerPoints + 0.5);
        setUserPoints(userPoints + 0.5);
      }
    }

    if (item === choices[2]) {
      // scissors
      if (computerChoice == choices[0]) {
        // rock
        setFeedback("You lose");
        setColor("text-red-500");
        setComputerPoints(computerPoints + 1);
      } else if (computerChoice == choices[1]) {
        // paper
        setFeedback("You win");
        setColor("text-green-500");
        setUserPoints(userPoints + 1);
      } else if (computerChoice == choices[2]) {
        // scissors
        setFeedback("It's a draw");
        setColor("text-yellow-500");
        setComputerPoints(computerPoints + 0.5);
        setUserPoints(userPoints + 0.5);
      }
    }

    console.log(computerChoice);
  };

  return (
    <main className="flex flex-col items-center justify-between py-20">
      <h1 className="flex items-start justify-center flex-col w-fit font-semibold text-3xl">
        <span className="first-letter:text-orange-500">Rock</span>{" "}
        <span className="first-letter:text-orange-500">Paper</span>{" "}
        <span className="first-letter:text-orange-500">Scissors</span>
      </h1>
      <p className={`font-semibold ${color}`}>{feedback}</p>
      <div className="flex flex-col md:flex-row items-center justify-evenly mt-32 w-full transition-all">
        <div
          onClick={() => pickYourChampion("rock")}
          className=" text-orange-500"
        >
          <FontAwesomeIcon
            icon={faHandRock}
            className="p-5 scale-[3] border-2 border-gray-600 border-dashed rounded-full cursor-pointer hover:border-orange-500"
          />
        </div>
        <div
          onClick={() => pickYourChampion("paper")}
          className=" text-orange-500 my-36 md:my-0"
        >
          <FontAwesomeIcon
            icon={faHandPaper}
            className="p-5 scale-[3] border-2 border-gray-600 border-dashed rounded-full cursor-pointer hover:border-orange-500"
          />
        </div>
        <div
          onClick={() => pickYourChampion("scissors")}
          className=" text-orange-500"
        >
          <FontAwesomeIcon
            icon={faHandScissors}
            className="p-5 scale-[3] border-2 border-gray-600 border-dashed rounded-full cursor-pointer hover:border-orange-500"
          />
        </div>
      </div>
      <div className="mt-32">
        <p>You: {userPoints}</p>
        <p>Computer: {computerPoints}</p>
      </div>
    </main>
  );
};

export default RockPaperScissor;
