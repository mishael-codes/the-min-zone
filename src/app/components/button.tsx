interface ButtonProps {
  text: string;
  standard?: boolean;
}

const Button = ({ text, standard }: ButtonProps) => {
  return (
    <button
      className={`${
        standard
          ? "bg-orange-500 shadow-md shadow-orange-950 text-black hover:bg-gradient"
          : "text-orange-500 bg-transparent"
      } rounded-xl font-semibold transition-all px-7 py-2`}
    >
      {text}
    </button>
  );
};

export default Button;
