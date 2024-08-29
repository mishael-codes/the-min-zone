interface ButtonProps {
  text: string;
  standard?: boolean;
}

const Button = ({ text, standard }: ButtonProps) => {
  return (
    <button
      className={`${
        standard
          ? "bg-orange-500 shadow-md shadow-orange-950 text-black hover:bg-gradient px-7"
          : "text-misc bg-transparent"
      } p-2 rounded-xl font-semibold transition-all`}
    >
      {text}
    </button>
  );
};

export default Button;
