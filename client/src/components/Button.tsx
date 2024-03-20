import React from 'react';
import { ButtonProps } from "../interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = ({ variant, text, onClick, color }) => {

  let classname = "py-2 px-5 rounded-md transition duration-300 ease-in-out";
  classname += color
  if (variant === "contained") {
    classname += " text-white ";
  } else if (variant === "outlined") {
    classname += " border border-cyan-500 ";
  } else if (variant === "link") {
    classname += " border-b border-gray-500 ";
  }

  return (
    <button type='submit' onClick={onClick} className={classname}>{text.toUpperCase()}</button>
  );
};

export default Button;
