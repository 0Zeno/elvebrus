import { urlFor } from "@/sanity/lib/image";
import { getCurrentYearLienup } from "@/sanity/lib/queries/lineupQuery";
import Image from "next/image";
import Marquee from "react-fast-marquee";

export async function CurrentLineup() {
  const { data: lineup } = await getCurrentYearLienup();

  return (
    <div className="flex justify-center md:pt-12 md:pb-12 max-w-[64rem]">
      <div>
        <h2 className="text-4xl md:text-7xl text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]  md:drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
          Lineup {lineup?.year}
        </h2>
        {lineup?.artists ? (
          <Marquee pauseOnHover={true}>
            {lineup?.artists.map((artist) => {
              return (
                <Image
                  className="mr-4 w-32 md:w-64 border-2"
                  key={artist._id}
                  width={200}
                  height={200}
                  src={urlFor(artist.image).url()}
                  alt={artist.name}
                ></Image>
              );
            })}
          </Marquee>
        ) : null}
      </div>
    </div>
  );
}
