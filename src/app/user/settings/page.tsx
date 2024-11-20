// firebase imports
import auth from "../../../firebase/fire-auth";
import { signOut } from "firebase/auth";

// next imports
import { useRouter } from "next/navigation";

const Settings = () => {
  const router = useRouter();

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
    <><button onClick={signOutUser}>Sign out</button></>
  )
}
export default Settings