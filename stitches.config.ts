import { createStitches } from "@stitches/react";

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    fonts: {
      system: "system-ui",
    },
    colors: {
      primary: "rgb(6 128 239)",
      text: "white",
      caption: "rgb(210 210 212)",
      darkGray: "rgb(18 18 18)",
    },
    fontSizes: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
    },
  },
});
