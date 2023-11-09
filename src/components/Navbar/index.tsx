"use client";
import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { Hamburger } from "./Hamburger";

type NavbarProps = {
  links: {
    name: string;
    href: string;
  }[];
};

export const Navbar: React.FC<NavbarProps> = ({ links }) => {
  const [isScrolling, setIsScrolling] = useState(false);

  function scrollHandler() {
    if (window.scrollY > 50) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <NavigationMenu.Root
      className={`fixed w-full p-4 md:px-12 lg:px-20 md:py-10 z-10  transition-all ${
        isScrolling && "py-3 gap-y-1 md:py-5 bg-zinc-900/60 backdrop-blur-md"
      }`}
    >
      <NavigationMenu.List className="flex flex-row items-center justify-between gap-2">
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="/#/"
            className="text-xl font-black md:text-2xl lg:text-3xl text-primary-color"
            id="home"
          >
            MBrunoS
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <div
          className={`hidden md:flex gap-4 px-4 transition-border ${
            !isScrolling &&
            "py-2 rounded-full border border-primary-color bg-zinc-900/60 shadow-md shadow-gray-50/20"
          }`}
        >
          {links.map((link) => (
            <NavigationMenu.Item key={link.name}>
              <NavigationMenu.Link
                href={link.href}
                className="text-secondary-color hover:text-primary-color"
              >
                {link.name}
              </NavigationMenu.Link>
            </NavigationMenu.Item>
          ))}
        </div>

        {/* Mobile (small) nav */}
        <div className="md:hidden">
          <NavigationMenu.Item className="relative">
            <NavigationMenu.Trigger className="w-6 h-6">
              <Hamburger className="text-secondary-color" />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content
              className={`absolute right-0 px-4 py-2 text-left border rounded-lg shadow-md border-primary-color bg-zinc-900/90 shadow-gray-50/20 transition-transform ${
                isScrolling && "translate-y-5"
              }`}
            >
              <NavigationMenu.Sub defaultValue={links[0].name}>
                <NavigationMenu.List>
                  {links.map((link) => (
                    <NavigationMenu.Item
                      key={link.name}
                      value={link.name}
                      className=""
                    >
                      <NavigationMenu.Link
                        href={link.href}
                        className="inline-block w-full py-1 text-right text-secondary-color hover:text-primary-color focus:text-primary-color"
                      >
                        {link.name}
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  ))}
                </NavigationMenu.List>
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>

      {/* <NavigationMenu.List
        className={`hidden md:flex gap-4 px-4 transition-border ml-auto ${
          !isScrolling &&
          "py-2 rounded-full border border-primary-color bg-zinc-900/60 shadow-md shadow-gray-50/20"
        }`}
      >
        {links.map((link) => (
          <NavigationMenu.Item key={link.name}>
            <NavigationMenu.Link
              href={link.href}
              className="text-secondary-color hover:text-primary-color"
            >
              {link.name}
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        ))}
      </NavigationMenu.List> */}
    </NavigationMenu.Root>
  );
};
