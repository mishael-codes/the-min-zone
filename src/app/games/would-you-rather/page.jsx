"use client";

import allQuestions from "@/app/jsons/wouldyourather.json";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import Button from "@/app/components/button"
import BackButton from "@/app/components/backButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { useState } from "react";

const WouldYouRather = () => {
  const [category, setCategory] = useState("");
  const [question, setQuestion] = useState("");

  // Extracting categories properly
  const categories = Object.keys(allQuestions[0]);

  const selectCategory = (e) => {
    const selectedCategory = e.currentTarget.textContent || "";
    setCategory(selectedCategory);

    // Generate a random question immediately when category is selected
    generateRandomQuestion(selectedCategory);
  };

  const generateRandomQuestion = (selectedCategory) => {
    if (!selectedCategory) return;

    // Get all questions from the selected category
    const questionsObj = allQuestions[0][selectedCategory];

    if (questionsObj) {
      const questionsArray = Object.values(questionsObj); // Convert object to an array
      const randomQuestion =
        questionsArray[Math.floor(Math.random() * questionsArray.length)];
      setQuestion(randomQuestion);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <div className="absolute left-10 lg:left-24 top-5 lg:top-16">
        <BackButton />
      </div>
      {/* Category Selection */}
      {!category ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-fit flex items-center justify-center flex-col bg-black text-[#f4f4f4] gap-7 p-12 rounded-lg shadow-lg shadow-orange-400 border-2 border-orange-500"
        >
          <h1 className="text-4xl font-bold">Select a category</h1>
          <p className="text-xl">Choose a category to start playing</p>
          <div className="flex flex-col md:grid md:grid-cols-3 h-fit w-fit p-20 items-center justify-center gap-5">
            {categories.map((categoryName, index) => (
              <p
                key={index}
                className="bg-orange-500 p-5 rounded-lg w-full text-center cursor-pointer hover:bg-orange-600"
                onClick={selectCategory}
              >
                {categoryName}
              </p>
            ))}
          </div>
        </motion.div>
      ) : (
        // Question Display & Generate Button
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-screen-sm flex items-center justify-center flex-col bg-black text-[#f4f4f4] gap-7 p-12 rounded-lg shadow-lg shadow-orange-400 border-2 border-orange-500"
        >
          <h2 className="text-2xl font-bold">Category: {category}</h2>
          <p className="text-xl text-center">{question}</p>
            <FontAwesomeIcon
              icon={faDice}
              size="2x"
              className="bg-orange-500 text-white px-5 py-2 rounded-lg hover:bg-orange-600 
             active:scale-90 active:duration-150 active:ease-in-out 
             transition-transform duration-300 ease-out cursor-pointer"
              onClick={() => generateRandomQuestion(category)}
            />
            <Button text="Switch Category" click={() => setCategory("")} />
        </motion.div>
      )}
    </div>
  );
};

export default WouldYouRather;
