// Component Import
import Button from "./button";
const Nav = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-primary">
      <h1 className="font-bold text-secondary">The Min Zone</h1>
      <div>
        <Button standard text="Sign Up" />
        <Button text="Sign In" />
      </div>
    </nav>
  );
};
export default Nav;
