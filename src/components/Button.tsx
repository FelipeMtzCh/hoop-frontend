interface ButtonProps {
  label: string;
  bg: string;
  text: string;
  borderActive: boolean;
  icon: boolean;
}

const Button = ({
  label,
  bg,
  text,
  borderActive,
  icon = false,
}: ButtonProps) => {
  const styles = `flex items-center justify-center px-5 py-3 rounded-sm bg-${bg} text-${text} rounded-sm gap-1`;
  const stylesBorder = `flex items-center justify-center px-5 py-[11px] rounded-sm bg-${bg} text-${text} rounded-sm border-2 border-${text} gap-1`;

  return (
    <button className={borderActive ? stylesBorder : styles}>
      {label}
      {icon ? (
        <img className="w-[1.5rem] py-3" src="/Icon.png" alt="icon" />
      ) : null}
    </button>
  );
};

export default Button;
