"use client";

// context imports
import { useAuth } from "@/context/AuthContext";

// next imports
import { useRouter } from "next/navigation";
import Link from "next/link";

// react imports
import { useEffect, useState } from "react";
const Dashboard = () => {
  const router = useRouter();
  const { user } = useAuth();
  const [username, setUsername] = useState("");
  const [askToSetUsername, setAskToSetUsername] = useState(false);

  // check if user is logged in
  useEffect(() => {
    if (user) {
      if (user.displayName) {
        setUsername(user.displayName);
      } else {
        setUsername(user.email);
        setAskToSetUsername(true);
      }
    } else router.push("/auth/sign-in");
  }, [router, user]);

  return (
    <>
      {user ? (
        <section className="m-20">
          <div className=" text-2xl rounded-md mb-4">
            <p>Welcome,</p>{" "}
            <span className="text-orange-500 text-3xl">{username}</span>{" "}
            {askToSetUsername ? (
              <Link href="settings" className="text-sm underline">
                Set Username
              </Link>
            ) : (
              ""
            )}
          </div>
          <section className="grid grid-cols-2 gap-8">
            <div className="flex flex-col items-start justify-center h-52 bg-zinc-900 p-4 text-2xl rounded-md">
              <p>Recent Games Played:</p>
              <div className="flex flex-col text-lg">
                <span>- Guess the number</span>
                <span>- Tic Tac Toe</span>
                <span>- Would you rather...?</span>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center h-52 bg-zinc-900 p-4 text-2xl rounded-md">
              <p>Time Played:</p>
              <div className="flex flex-col text-lg">
                <span>Today -</span>
                <span>Last Week -</span>
                <span>All time -</span>
              </div>
            </div>
          </section>
        </section>
      ) : (
        <>
          {" "}
          <h1>
            Your are not a user please <Link href="/sign-in">log in</Link> or{" "}
            <Link href="/sign-up">sign up</Link>
          </h1>
        </>
      )}
    </>
  );
};
export default Dashboard;
