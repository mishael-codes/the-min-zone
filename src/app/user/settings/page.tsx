"use client";
// firebase imports
import auth from "../../../firebase/fire-auth";
import { signOut, updateProfile } from "firebase/auth";

// next imports
import { useRouter } from "next/navigation";

import { useAuth } from "@/context/AuthContext";
import Button from "@/app/components/button";
import { useState } from "react";
import { motion } from "framer-motion";

const Settings = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();
  const { user } = useAuth();

  // sign out user
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        router.push("/auth/sign-in");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // set username
  const handleSetUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUsername(value);
    console.log(username);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // update username in firebase

      if (auth.currentUser) {
        if (username) {
          await updateProfile(auth.currentUser, {
            displayName: username,
          });
          setMessage("Username updated successfully");
          setTimeout(() => {
            setMessage("");
          }, 3000);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="ml-10">
      {user ? (
        <>
          <h1 className="text-5xl font-bold mt-20">Settings</h1>
          <form
            className="flex items-start justify-center flex-col gap-5 my-10 w-full md:w-3/4"
            onSubmit={handleSubmit}
          >
            <label className="flex flex-col font-light w-full md:w-1/3 gap-2">
              Username
              <input
                type="text"
                onChange={handleSetUsername}
                placeholder={`${user.displayName || "Set username"}`}
                className="w-full bg-transparent text-orange-500 p-3 rounded-xl border border-orange-500 focus:border-orange-500 placeholder:text-gray-500"
              />
              {message ? (
                <motion.p
                  {...{ initial: { opacity: 0 }, animate: { opacity: 1 } }}
                  transition={{ duration: 0.5 }}
                  className="text-xs"
                >
                  {message}
                </motion.p>
              ) : (
                ""
              )}
            </label>
            <label className="flex flex-col font-light w-full md:w-1/3 gap-2">
              Email
              <input
                type="email"
                placeholder={`${user.email}`}
                className="w-full bg-transparent text-orange-500 p-3 rounded-xl border border-orange-500 focus:border-orange-500 placeholder:text-gray-500"
              />
            </label>
            <Button text="Save" standard />
          </form>
          <Button text="Sign Out" click={() => handleSignOut} />
        </>
      ) : (
        <p>You are not signed in</p>
      )}
    </div>
  );
};
export default Settings;
