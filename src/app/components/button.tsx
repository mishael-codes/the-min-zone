interface ButtonProps {
  text: string;
  standard?: boolean;
}

const Button = ({ text, standard }: ButtonProps) => {
  return (
    <button className={`${standard ? "bg-black shadow-md shadow-orange-950 text-orange-500 px-7" : "text-misc bg-transparent"} p-2 rounded-xl font-semibold`}>
      {text}
    </button>
  );
}

export default Button;