import { PrismicNextImage } from "@prismicio/next";
import { RichTextMapSerializer } from "@prismicio/client/richtext";
import Link from "next/link";

export const components: RichTextMapSerializer<JSX.Element> = {
  paragraph: ({ children }) => <p className="my-5">{children}</p>,
  heading1: ({ children }) => (
    <h1 className="my-2 text-4xl font-bold text-primary-color">{children}</h1>
  ),
  heading2: ({ children }) => (
    <h2 className="my-2 text-3xl font-bold text-primary-color">{children}</h2>
  ),
  heading3: ({ children }) => (
    <h3 className="my-2 text-2xl font-bold text-primary-color">{children}</h3>
  ),
  heading4: ({ children }) => (
    <h4 className="my-2 text-xl font-bold text-primary-color">{children}</h4>
  ),
  heading5: ({ children }) => (
    <h5 className="my-2 text-lg font-bold text-primary-color">{children}</h5>
  ),
  heading6: ({ children }) => (
    <h6 className="my-2 font-bold text-md text-primary-color">{children}</h6>
  ),
  list: ({ children }) => <ul className="pl-6 list-disc">{children}</ul>,
  listItem: ({ children }) => <li>{children}</li>,
  oList: ({ children }) => <ol className="pl-6 list-decimal">{children}</ol>,
  oListItem: ({ children }) => <li>{children}</li>,
  preformatted: ({ children }) => (
    <pre className="p-2 border rounded-md border-highlight-color bg-card-gradient">
      {children}
    </pre>
  ),
  image: ({ node }) => <PrismicNextImage field={node} />,
  hyperlink: ({ children, node }) => (
    <Link
      href={node.data.url || "#"}
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-primary-color hover:text-primary-color/70 focus:text-primary-color/70"
    >
      {children}
    </Link>
  ),
};
