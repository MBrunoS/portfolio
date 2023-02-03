import React from "react";

type ButtonProps = {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  children,
}) => {
  if (variant === "primary") {
    return (
      <button
        className="inline-block bg-primary-color border border-primary-color
                rounded-full px-4 py-2 mt-4 mr-2 text-white hover:shadow-button
                transition duration-300"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className="inline-block bg-primary-color/[.15] border border-primary-color/25
                rounded-full px-4 py-2 mt-4 mr-2 text-white/80 transition duration-300
                hover:shadow-button hover:bg-primary-color/[.35] hover:border-primary-color/50
                hover:text-white/90"
    >
      {children}
    </button>
  );
};
