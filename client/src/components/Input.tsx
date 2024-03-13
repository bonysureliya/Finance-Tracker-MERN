import React from 'react'
import { InputProps } from '../interfaces/InputProps'

const Input: React.FC<InputProps> = ({ type, variant, size }) => {
  let classname = "focus:outline-none";
  if (variant === "underlined") {
    classname += " border-b border-gray-500";
  } else if (variant === "outlined") {
    classname += " rounded-xl border border-gray-500";
  }

  classname += " w-full";

  if (size === "small") {
    classname += " h-[30px]";
  } else if (size === "medium") {
    classname += " h-[40px]";
  } else if (size === "large") {
    classname += " h-[50px]";
  }

  return (
    <input type={type} className={classname} />
  )
}

export default Input
