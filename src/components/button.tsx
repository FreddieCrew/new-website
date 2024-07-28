import "@/types/types";

const Button: React.FC<ButtonProps> = ({
  children,
  link = "",
  type = "button",
  className = "button",
  disabled = false,
  target = "_blank",
}) => {
  return (
    <div>
    <a href={link} target={target}>
      <button
        type={type}
        className={`bg-red-900 p-5 text-white b-0 hover:bg-[#972222] ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    </a>
    </div>
  );
};

export default Button;
