import Image from "next/image";
import { getCurrentYearLienup } from "@/sanity/lib/queries/lineupQuery";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "./ui/carousel";
import { urlFor } from "@/sanity/lib/image";

export async function CurrentLineup() {
  const lineup = await getCurrentYearLienup();
  const amoutOfArtists = lineup?.artists.length;

  return (
    <div className="flex justify-center pt-12 pb-12">
      {amoutOfArtists ? (
        <div>
          <h2 className="text-4xl text-center drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
            Lineup {lineup.year}
          </h2>
          <Carousel className="w-full max-w-4xl">
            <CarouselContent className="-ml-1">
              {Array.from({ length: amoutOfArtists }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-1">
                    <div>
                      <div className="flex aspect-square items-center justify-center p-6">
                        {lineup.artists[index].image ? (
                          <Image
                          className="border border-orange-600 rounded-md"
                            width="600"
                            height="600"
                            src={urlFor(lineup.artists[index].image)
                              .width(600)
                              .height(600)
                              .quality(80)
                              .auto("format")
                              .url()}
                            alt={ lineup.artists[index].name || "artist"}
                          ></Image>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      ) : null}
    </div>
  );
}
