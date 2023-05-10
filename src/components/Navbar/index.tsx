import React, { useEffect, useState } from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { useTranslation } from "react-i18next";

export const Navbar: React.FC = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const { t } = useTranslation();

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
      className={`fixed w-full p-4 md:px-20 md:py-10 z-10 flex flex-col md:flex-row gap-2 items-center justify-between transition-all ${
        isScrolling && "py-2 gap-y-1 md:py-5 bg-zinc-900/60 backdrop-blur-md"
      }`}
    >
      <NavigationMenu.List>
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#/"
            className="text-primary-color text-xl font-black"
            id="home"
          >
            MBrunoS
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>

      <NavigationMenu.List
        className={`flex gap-4 px-4 transition-border ${
          !isScrolling &&
          "py-2 rounded-full border border-primary-color bg-zinc-900/60 shadow-md shadow-gray-50/20"
        }`}
      >
        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#about"
            className="text-secondary-color hover:text-primary-color"
          >
            {t("navbar.about")}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#jobs"
            className="text-secondary-color hover:text-primary-color"
          >
            {t("navbar.jobs")}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#projects"
            className="text-secondary-color hover:text-primary-color"
          >
            {t("navbar.projects")}
          </NavigationMenu.Link>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Link
            href="#articles"
            className="text-secondary-color hover:text-primary-color"
          >
            {t("navbar.articles")}
          </NavigationMenu.Link>
        </NavigationMenu.Item>
      </NavigationMenu.List>
    </NavigationMenu.Root>
  );
};
