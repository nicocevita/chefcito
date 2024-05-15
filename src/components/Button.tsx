import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
  text: string;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  text,
  className,
  icon,
  iconPosition = "start",
  ...rest
}) => {
  const buttonClassName = `bg-blue-500 flex justify-center hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`;

  return (
    <button {...rest} className={buttonClassName} onClick={onClick}>
      {iconPosition === "start" && icon && icon}
      {text}
      {iconPosition === "end" && icon && icon}
    </button>
  );
};

export default Button;
