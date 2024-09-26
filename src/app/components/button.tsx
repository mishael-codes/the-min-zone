import { motion } from "framer-motion";

interface ButtonProps {
  text: string;
  standard?: boolean;
  click?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ text, standard, click }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={click}
      className={`${
        standard
          ? "bg-orange-500 border border-orange-400 shadow-md shadow-orange-950 text-black hover:text-orange-500"
          : "text-orange-500 bg-transparent"
      } rounded-xl font-semibold hover:bg-transparent hover:border hover:border-orange-500 transition-all px-7 py-2`}
    >
      {text}
    </motion.button>
  );
};

export default Button;
