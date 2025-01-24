import { useMemo } from "react";
import { PortableText, PortableTextComponentProps } from "@portabletext/react";
import { getImageDimensions, SanityImageSource } from "@sanity/asset-utils";
import { urlFor } from "@/sanity/lib/image";
import { BlockContent } from "@/sanity/types";

type RenderContentProps = {
  blocks: BlockContent;
};

type ImageProps = PortableTextComponentProps<SanityImageSource>;

const Image = ({ value, isInline }: ImageProps) => {
  const { width, height } = getImageDimensions(value);

  const alt = useMemo(() => {
    if (typeof value !== "object") {
      return "";
    }

    if (!("alt" in value)) {
      return "";
    }

    if (typeof value.alt !== "string") {
      return "";
    }

    return value.alt;
  }, [value]);

  const src = urlFor(value)
    .width(isInline ? 100 : 800)
    .fit("max")
    .auto("format")
    .url();

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      style={{
        display: isInline ? "inline-block" : "block",
        aspectRatio: width / height,
      }}
    />
  );
};

export const RenderContent = ({ blocks }: RenderContentProps) => {
  return (
    <PortableText
      components={{
        types: {
          image: Image,
        },
        marks: {
          em: ({ children }) => <em>{children}</em>,
          strong: ({ children }) => <strong>{children}</strong>,
          link: ({ value, children }) => {
            const target = (value?.href || "").startsWith("http")
              ? "_blank"
              : undefined;
            return (
              <a
                className=" group font-semibold hover:underline"
                href={value?.href}
                target={target}
                rel={target === "_blank" ? "noindex nofollow" : undefined}
              >
                {children}{" "}
                <span className="inline-block transition-transform font-semibold duration-100 ease-in group-hover:translate-x-1">
                  &#x2799;
                </span>
              </a>
            );
          },
        },
        block: {
          h1: ({ children }) => (
            <h1 className="mb-6 text-4xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="mb-4 text-3xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="mb-4 text-2xl drop-shadow-[1.5px_1.5px_0px_rgba(0,0,0,1)]">
              {children}
            </h3>
          ),
          normal: ({ children }) => <p className="mb-4">{children}</p>,
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 pl-4 italic">
              {children}
            </blockquote>
          ),
        },
      }}
      value={blocks}
      onMissingComponent={(message, options) => {
        console.error(message, {
          type: options.type,
          nodeType: options.nodeType,
        });
      }}
    />
  );
};
