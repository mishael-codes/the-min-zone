import Image from "next/image"
import guessTheNumber from "../../../public/assets/img/guess the number.png"
import rockPaperScissor from "../../../public/assets/img/rock paper scissors.png"
import ticTacToe from "../../../public/assets/img/tic tac toe.png"
import Link from "next/link"
const FeaturedGames = () => {
  const games = [
    { name: "Guess the number", img: guessTheNumber, link: "/games/guess-the-number" },
    { name: "Rock paper scissors", img: rockPaperScissor, link: "/games/rock-paper-scissors" },
    { name: "Tic Tac Toe", img: ticTacToe, link: "/games/tic-tac-toe" },
  ]
  return (
    <div className="w-full flex flex-col text-center">
      <h2 className="text-2xl font-bold underline decoration-dashed decoration-orange-500 underline-offset-2 mb-5">Featured Games</h2>
      <div className="w-full grid grid-cols-1 md:grid-cols-3">
        {games.map(game => (
          <div key={game.name} className="flex flex-col items-center justify-center my-5">
            <Image src={game.img} alt="name of the game" className="mb-2 border border-dashed border-orange-500 rounded-lg" />
            <Link href={game.link}>{game.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )

}
export default FeaturedGames