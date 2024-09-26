"use client"

import auth from "../../firebase/fire-auth";
import { onAuthStateChanged } from "firebase/auth"
import { signOut } from "firebase/auth";

import {useRouter} from "next/navigation";

import { useState } from "react";
const Dashboard = () => {
  const router = useRouter()
  const [username, setUsername] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUsername(user.email ?? "");
    }else router.push("/signin")
  });

  const signOutUser = () => {
    signOut(auth).then(() => {
      router.push("/sign-in")
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <>
      <h1>Dashboard</h1>
      <p>
        Welcome, <span className="text-orange-500">{username}</span>
      </p>
      <button onClick={signOutUser}>Sign out</button>
    </>
  );
} 
 export default Dashboard