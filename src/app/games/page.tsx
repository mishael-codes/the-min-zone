"use client"

import Image from "next/image"
import guessTheNumber from "../../../public/assets/img/guess the number.png"
import rockPaperScissor from "../../../public/assets/img/rock paper scissors.png"
import wouldYouRather from "../../../public/assets/img/would you rather.png"
import Link from "next/link"
import Nav from "../components/nav"
const FeaturedGames = () => {
  const games = [
    {
      name: "Guess the number",
      img: guessTheNumber,
      link: "/games/guess-the-number",
    },
    {
      name: "Rock paper scissors",
      img: rockPaperScissor,
      link: "/games/rock-paper-scissors",
    },
    {
      name: "Would you rather",
      img: wouldYouRather,
      link: "/games/would-you-rather",
    },
  ];
  return (
    <>
      <Nav />
      <div className="w-full flex flex-col text-center mt-5">
        <h2 className="text-2xl font-bold underline decoration-dashed decoration-orange-500 underline-offset-2 mb-5">
          Game Library
        </h2>
        <div className="w-full grid grid-cols-1 md:grid-cols-3 place-items-center gap-10">
          {games.map((game) => (
            <Link
            key={game.name}
            href={game.link}
              className="w-3/4 flex flex-col items-center justify-center my-5 transition-all hover:scale-105 duration-300"
            >
              <Image
                src={game.img}
                alt="name of the game"
                className="mb-2 border border-dashed border-orange-500 rounded-lg"
              />
              <Link href={game.link}>{game.name}</Link>
            </Link>
          ))}
        </div>
      </div>
    </>
  );

}
export default FeaturedGames