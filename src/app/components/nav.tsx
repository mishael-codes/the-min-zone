// Component Import
import Button from "./button";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-orange-500">
      <h1 className="font-bold text-black">The Min Zone</h1>
      <div className="hidden md:flex">
        <Button standard text="Sign Up" />
        <Button text="Sign In" />
      </div>
    </nav>
  );
};
export default Nav;
