"use client";

// firebase imports
import auth from "../../firebase/fire-auth";
import { signOut } from "firebase/auth";

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

  // check if user is logged in
  useEffect(() => {
    user ? setUsername(user.email) : router.push("/auth/sign-in");
  }, [router, user]);

  // sign out user
  const signOutUser = () => {
    signOut(auth)
      .then(() => {
        router.push("/auth/sign-in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      {user ? (
        <>
          <h1>Dashboard</h1>
          <p>
            Welcome, <span className="text-orange-500">{username}</span>
          </p>
          <button onClick={signOutUser}>Sign out</button>
        </>
      ) : (
        <>
          {" "}
          <h1>
            Your are not a user please <Link href="/sign-in">log in</Link> or
            <Link href="/sign-up">sign up</Link>
          </h1>
        </>
      )}
    </>
  );
};
export default Dashboard;
