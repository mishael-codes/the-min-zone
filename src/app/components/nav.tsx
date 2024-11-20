// Next Imports
import Link from "next/link";
// Component Import
import Button from "./button";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-[#111]">
      <h1 className="font-bold text-orange-500">The Min Zone</h1>
      <div className="hidden gap-5 md:flex">
        <Link href="/auth/sign-up">
          <Button standard text="Sign Up" />
        </Link>
        <Link href="/auth/sign-in">
          <Button text="Sign In" />
        </Link>
      </div>
    </nav>
  );
};
export default Nav;
