import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "block";
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
  icon,
  className,
}) => {
  if (variant === "primary") {
    return (
      <button
        className={`inline-flex items-center bg-primary-color border border-primary-color
                rounded-full px-4 py-2  text-white hover:shadow-button
                transition duration-300 ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  } else if (variant === "secondary") {
    return (
      <button
        className={`inline-flex items-center bg-primary-color/[.15] border border-primary-color/25
                rounded-full px-4 py-2  text-white/80 transition duration-300
                hover:shadow-button hover:bg-primary-color/[.35] hover:border-primary-color/50
                hover:text-white/90 ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }

  return (
    <button
      className={`flex items-center w-full bg-primary-color border border-primary-color
                rounded-full px-4 py-2  text-white hover:shadow-button
                transition duration-300 ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
};
