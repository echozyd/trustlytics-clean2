import React from "react";
export function Button({ children, className = "", onClick, variant = "default" }) {
  const baseStyle = "rounded px-4 py-2 font-semibold";
  const variantStyle = variant === "ghost" ? "bg-transparent text-blue-600 hover:underline" : "bg-blue-600 text-white hover:bg-blue-700";
  return <button onClick={onClick} className={`${baseStyle} ${variantStyle} ${className}`}>{children}</button>;
}