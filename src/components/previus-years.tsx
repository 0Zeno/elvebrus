import { urlFor } from "@/sanity/lib/image";
import { getPreviusYears } from "@/sanity/lib/queries/previusYearQuery";
import Image from "next/image";
import Link from "next/link";

export async function PreviusYears() {
  const { data: previusYears } = await getPreviusYears();
  return (
    <div className="flex justify-center pb-16 h-full">
      <div>
        <h2 className="text-2xl md:text-4xl text-center drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]  md:drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
          Tidligere år
        </h2>
        <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-8">
          {previusYears.map((year) => {
            return (
              <div
                className="flex justify-center space-y-4 pb-8"
                key={year._id}
              >
                <div className="space-y-2">
                  <Image
                    className="relative object-cover h-36 w-48 md:h-64 md:w-96 border-2 rounded-md mb-2"
                    width={600}
                    height={600}
                    src={urlFor(year.images[0]).url()}
                    alt={`Bilde fra året ${year.year}`}
                  ></Image>
                  <Link href={`/dette-var/${year.slug}`}>
                    <h4 className="group text-center text-lg md:text-2xl drop-shadow-[1px_1px_0px_rgba(0,0,0,1)] md:drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:underline underline-offset-2 ">
                      Sjekk ut {year.year}
                      <p className="inline-block pl-2 transition-transform font-semibold duration-100 ease-in group-hover:translate-x-1">
                        &#x2799;
                      </p>
                    </h4>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
