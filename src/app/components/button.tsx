interface ButtonProps {
  text: string;
  standard?: boolean;
}

const Button = ({ text, standard }: ButtonProps) => {
  return (
    <button className={`${standard ? "bg-secondary shadow-xl text-accent px-4" : "text-misc bg-transparent"} p-2 rounded-xl font-semibold`}>
      {text}
    </button>
  );
}

export default Button;