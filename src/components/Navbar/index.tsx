import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";

export const Navbar: React.FC = () => {
  return (
    <NavigationMenu.Root className="fixed bg-zinc-900/70 w-full p-4 z-10 backdrop-blur-md flex items-center justify-between">
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/"
            className="text-primary-color text-4xl font-black font-kanit"
          >
            MB
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.List className="flex gap-4">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#about"
            className="text-secondary-color hover:text-primary-color"
          >
            Sobre
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#jobs"
            className="text-secondary-color hover:text-primary-color"
          >
            Trabalhos
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#projects"
            className="text-secondary-color hover:text-primary-color"
          >
            Projetos
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#articles"
            className="text-secondary-color hover:text-primary-color"
          >
            Artigos
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
