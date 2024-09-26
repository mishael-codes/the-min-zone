"use client";
//  Next Imports
import Link from "next/link";
import {useRouter} from "next/navigation";
import Button from "../components/button";
import { motion } from "framer-motion";

// firebase imports
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/fire-auth";

// react imports
import { useState } from "react";
const SignUp = () => {
  const router = useRouter();
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // assign the input values to state
  // email
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const emailRegex =
      /^(?:"[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+"|[a-zA-Z0-9._%+-]+)@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      
    if (!emailRegex.test(value)) {
      console.log("Please enter to valid email address");
    }else if(emailRegex.test(value)){
      setEmail(value);
    }
  };

  // password
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!passwordRegex.test(value)) {
      console.log("Password must contain at least one number, one uppercase and lowercase letter, and at least 6 characters");
    }else if(passwordRegex.test(value)){
      setPassword(value);
    }
  };

  // confirm password
  const handleConfirmPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    if (value !== password) {
      console.log("Must be equal to password");
    }else if(value === password){
      setConfirmPassword(value);
    }
  };

  // create a user
  const createUser = () => {
    console.log(email, password, confirmPassword);
    
    if(email && password && confirmPassword){
      alert("Yeet")
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        })
    }else alert("error")
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex items-center justify-center flex-col min-h-screen w-screen bg-black text-[#f4f4f4] gap-7 overflow-hidden"
    >
      <Link
        href="/"
        className="text-orange-500 self-start justify-self-start font-semibold absolute top-7 left-5"
      >
        The Min Zone
      </Link>
      <div className="flex flex-col items-center justify-start gap-4">
        <h1 className="text-orange-500 text-3xl font-bold">Sign Up</h1>
        <p className="text-center">Sign up to store your progress and access multiplayer features!</p>
      </div>

      <form className="flex items-center justify-center flex-col gap-4 w-full px-10">
        <label
          className="flex flex-col font-light w-full md:w-1/3 gap-2"
          htmlFor="email"
        >
          Email
          <input
            type="email"
            id="email"
            placeholder="Player123@gmail.com"
            onChange={handleEmailChange}
            autoComplete="new-email"
            className="w-full bg-transparent text-orange-500 p-3 rounded-xl border border-orange-500 focus:border-orange-500 placeholder:text-gray-500"
          />
        </label>
        <label
          className="flex flex-col font-light w-full md:w-1/3 gap-2"
          htmlFor="password"
        >
          Password
          <input
            type="password"
            id="password"
            placeholder="*****"
            onChange={handlePasswordChange}
            autoComplete="new-password"
            className="w-full bg-transparent text-orange-500 p-3 rounded-xl border border-orange-500 focus:border-orange-500 placeholder:text-gray-500"
          />
        </label>
        <label
          className="flex flex-col font-light w-full md:w-1/3 gap-2"
          htmlFor="confirm-password"
        >
          {" "}
          Confirm Password
          <input
            type="password"
            id="confirm-password"
            placeholder="*****"
            onChange={handleConfirmPasswordChange}
            autoComplete="new-password"
            className="w-full bg-transparent text-orange-500 p-3 rounded-xl border border-orange-500 focus:border-orange-500 placeholder:text-gray-500"
          />
        </label>
      </form>
      <div className="flex items-center justify-between w-full md:w-1/2 px-10">
        <Button text={"Sign Up"} standard click={createUser} />
        <Link href="/sign-in">
          <Button text={"Go to Sign In"} />
        </Link>
      </div>
    </motion.div>
  );
};
export default SignUp;
