import type { ReactNode } from "react";

type ButtonProps = {
  variant?: "primary" | "secondary" | "block";
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  children,
  icon,
  className,
}: ButtonProps) {
  if (variant === "primary") {
    return (
      <button
        className={`inline-flex items-center bg-primary-color border border-primary-color
                rounded-full px-5 py-2.5 text-white hover:shadow-button cursor-pointer
                transition duration-300 font-semibold tracking-wide ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  } else if (variant === "secondary") {
    return (
      <button
        className={`inline-flex items-center bg-primary-color/15 border border-primary-color/35
                rounded-full px-5 py-2.5 text-white/85 transition duration-300 cursor-pointer font-semibold tracking-wide
                hover:shadow-button hover:bg-primary-color/35 hover:border-primary-color/50
                hover:text-white ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  }

  return (
    <button
      className={`flex items-center w-full bg-primary-color border border-primary-color
                rounded-full px-5 py-2.5 text-white hover:shadow-button cursor-pointer
                transition duration-300 font-semibold tracking-wide ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
