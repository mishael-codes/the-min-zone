"use client";
import { TypeAnimation } from "react-type-animation";
import Button from "./components/button";
import Nav from "./components/nav";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Nav />
      <div className="flex items-center justify-start flex-col gap-6 bg-black text-[#f4f4f4] min-h-screen">
        <h1 className="text-5xl font-bold text-center mt-20">
          Welcome to The Min Zone
        </h1>
        <p className="text-xl text-center mt-5 lg:w-1/3">
          Dive into a world of fun with our{" "}
          <TypeAnimation
            sequence={["addictive", 1000, "enjoyable", 1000]}
            wrapper="strong"
            speed={20}
            deletionSpeed={40}
            repeat={Infinity}
            cursor={true}
            className="text-orange-500"
          />
          minigames! Challenge friends, track your progress, and discover hidden
          gems. 🎮
        </p>
        <Link href="/src/app/games">
          <Button standard text="Get started" />
        </Link>
      </div>
    </>
  );
}
