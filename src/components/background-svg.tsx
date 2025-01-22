import Image from "next/image";
import backgroudSvg from "@/app/assets/background.svg";
import { cn } from "@/lib/utils";
export type BackgroundSvgProps = {
  width: number;
  className: string | undefined;
};
export const BackgroundSvg = ({ width, className}: BackgroundSvgProps) => {
  return (
    <div className="">
      <Image
        width={width}
        src={backgroudSvg}
        className={cn(``, className)}
        alt={"bilde i bakgrunnen"}
      />
    </div>
  );
};
