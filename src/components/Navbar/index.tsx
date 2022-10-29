import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed bg-zinc-900 w-full p-4">
      <div className="left">
        <span className="text-primary-color uppercase text-4xl font-black">
          MB
        </span>
      </div>
    </nav>
  );
};
