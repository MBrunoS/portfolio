"use client";
import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import * as Separator from "@radix-ui/react-separator";
import { Hamburger } from "./Hamburger";
import { twMerge } from "tailwind-merge";

type Link = {
  name: string;
  href: string;
};

type NavbarProps = {
  links: (Link & { sublinks?: Link[] })[];
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
    <NavigationMenu.Root className="fixed z-10 w-full" data-aos="fade-down">
      <NavigationMenu.List
        className={twMerge(
          "flex flex-row items-center justify-between gap-2 p-4 md:px-12 lg:px-20 md:py-10 transition-all",
          isScrolling && "py-3 gap-y-1 md:py-5 bg-zinc-900/60 backdrop-blur-md"
        )}
      >
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
          className={twMerge(
            "hidden md:flex gap-4 px-4 transition-border",
            !isScrolling &&
              "py-2 rounded-full border border-primary-color bg-zinc-900/60 shadow-md shadow-gray-50/20"
          )}
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

          <Separator.Root
            orientation="vertical"
            className="w-px bg-primary-color"
          />

          <NavigationMenu.Item>
            <NavigationMenu.Link
              href="/blog"
              className="text-secondary-color hover:text-primary-color"
            >
              Blog
            </NavigationMenu.Link>
          </NavigationMenu.Item>
        </div>

        {/* Mobile (small) nav */}
        <div className="md:hidden">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="w-6 h-6">
              <Hamburger className="text-secondary-color" />
            </NavigationMenu.Trigger>

            <NavigationMenu.Content
              className={twMerge(
                "w-fit px-4 py-2 text-left rounded-lg bg-zinc-900/60 backdrop-blur-md ml-auto mr-3 border border-highlight-color transition-transform",
                isScrolling && "translate-y-2"
              )}
            >
              <NavigationMenu.Sub defaultValue={links[0].name}>
                <NavigationMenu.List>
                  {links.map((link) => (
                    <NavigationMenu.Item key={link.name} value={link.name}>
                      <NavigationMenu.Link
                        href={link.href}
                        className="inline-block w-full py-1 pl-4 text-right text-secondary-color hover:text-primary-color focus:text-primary-color"
                      >
                        {link.name}
                      </NavigationMenu.Link>
                    </NavigationMenu.Item>
                  ))}

                  <Separator.Root className="h-px bg-primary-color" />

                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      href="/blog"
                      className="inline-block w-full py-1 pl-4 text-right text-secondary-color hover:text-primary-color focus:text-primary-color"
                    >
                      Blog
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Sub>
            </NavigationMenu.Content>
          </NavigationMenu.Item>
        </div>
      </NavigationMenu.List>
      <NavigationMenu.Viewport />
    </NavigationMenu.Root>
  );
};
