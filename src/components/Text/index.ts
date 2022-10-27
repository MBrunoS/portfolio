import { styled } from "../../../stitches.config";

export const Text = styled("p", {
  fontFamily: "$system",
  color: "$text",
  fontSize: "$md",

  variants: {
    size: {
      sm: {
        fontSize: "$sm",
      },
      md: {
        fontSize: "$md",
      },
      lg: {
        fontSize: "$lg",
      },
    },
    variant: {
      caption: {
        color: "$caption",
        fontSize: "$sm",
      },
      heading: {
        fontSize: "$xl",
        color: "$primary",
        textTransform: "uppercase",
      },
    },
  },
});
