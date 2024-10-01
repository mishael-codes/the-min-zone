"use client";
//  Next Imports
import Link from "next/link";
import { useRouter } from "next/navigation";
// components
import Button from "../../components/button";
import ButtonLoading from "@/app/components/loading/buttonLoading";
// framer motion
import { motion } from "framer-motion";

// firebase imports
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../../firebase/fire-auth";
import { useAuth } from "@/context/AuthContext";

// react imports
import { useEffect, useState } from "react";

const SignIn = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { user } = useAuth();

  // check if user is logged in
  useEffect(() => {
    user ? router.push("/dashboard") : null;
  });

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
  };

  // sign in user
  const signInUser = () => {
    if (email && password) {
      setLoading(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          router.push("/dashboard");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(errorCode);
          alert(errorMessage);
          setLoading(false)
        });
    } else alert("error");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className=" relative flex items-center justify-center flex-col min-h-screen w-screen bg-black text-[#f4f4f4] gap-20 overflow-hidden"
    >
      <Link
        href="/"
        className="text-orange-500 self-start justify-self-start font-semibold absolute top-10 left-5"
      >
        The Min Zone
      </Link>
      <div className="flex flex-col items-center justify-start gap-4">
        <h1 className="text-orange-500 text-3xl font-bold">Sign In</h1>
        <p>Login to access your account!</p>
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
            className="w-full bg-transparent text-orange-500 p-3 rounded-xl border border-orange-500 focus:border-orange-500 placeholder:text-gray-500"
          />
        </label>
      </form>
      <div className="flex items-center justify-between w-full md:w-1/2 px-10">
        <Button text={"Sign In"} click={signInUser} load={loading} standard />
        <Link href="sign-up">
          <Button text={"Go to Sign Up"} />
        </Link>
      </div>
    </motion.div>
  );
};
export default SignIn;
