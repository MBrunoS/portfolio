import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const Navbar: React.FC = () => {
  return (
    <NavigationMenu.Root className="fixed bg-zinc-900/70 w-full p-4 z-10 backdrop-blur-md flex items-center">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            className="text-primary-color text-4xl font-black font-kanit"
            href="/"
          >
            MB
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link>Sobre</NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
