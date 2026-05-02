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
        className={`inline-flex items-center rounded-full border border-primary-color/80
                bg-linear-to-r from-blue-600 to-violet-600 px-5 py-2.5 font-semibold text-white
                shadow-[0_8px_22px_rgba(37,99,235,0.35)] cursor-pointer
                transition duration-300 hover:-translate-y-0.5 hover:brightness-110 ${className}`}
      >
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </button>
    );
  } else if (variant === "secondary") {
    return (
      <button
        className={`inline-flex items-center rounded-full border border-primary-color/30 bg-primary-color/10
                px-5 py-2.5 text-white/85 transition duration-300 cursor-pointer
                hover:-translate-y-0.5 hover:shadow-button hover:bg-primary-color/30 hover:border-primary-color/60
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
                rounded-full px-4 py-2  text-white hover:shadow-button cursor-pointer
                transition duration-300 ${className}`}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
