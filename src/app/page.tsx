import Button from "./components/button";
import Nav from "./components/nav";
import Image from "next/image";
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <div className="flex items-center justify-start flex-col gap-6 bg-gradient min-h-screen">
          <h1 className="text-5xl font-bold text-center mt-20">
            Welcome to The Min Zone
          </h1>
          <p className="text-xl text-center mt-5">
            Dive into a world of fun with our addictive minigames! Challenge
            friends, track your progress, and discover hidden gems. 🎮
          </p>
          <Button standard text="Get started" />
        </div>
      </main>
    </>
  );
}
