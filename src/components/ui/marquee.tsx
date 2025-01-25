import { cn } from "~/lib/cn";

type MarqueeProps = {
  pauseOnHover?: boolean;
  gradient?: boolean;
  reverse?: boolean;
  className?: string;
  direction?: "left" | "up";
  children: React.ReactNode;
};

export const Marquee = ({
  pauseOnHover = false,
  gradient = false,
  reverse = false,
  direction = "left",
  className,
  children,
}: MarqueeProps) => {
  return (
    <div
      className={cn(
        "group flex items-center gap-2 overflow-hidden",
        {
          "flex-col": direction === "up",
          "flex-row": direction === "left",
        },
        className
      )}
      style={{
        maskImage: gradient
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
        WebkitMaskImage: gradient
          ? `linear-gradient(${
              direction === "left" ? "to right" : "to bottom"
            }, transparent 0%, rgba(0, 0, 0, 1.0) 10%, rgba(0, 0, 0, 1.0) 90%, transparent 100%)`
          : undefined,
      }}
    >
      {Array.from({ length: 10 }).map((_, index) => (
        <div
          key={index}
          className={cn("flex shrink-0 justify-center gap-2 [--gap:1rem]", {
            "animate-marquee-left flex-row": direction === "left",
            "animate-marquee-up flex-col": direction === "up",
            "direction-reverse": reverse,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  );
};
