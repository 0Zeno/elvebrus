import { urlFor } from "@/sanity/lib/image";
import { getPreviusYears } from "@/sanity/lib/queries/previusYearQuery";
import Image from "next/image";
import Link from "next/link";

export async function PreviusYears() {
  const previusYears = await getPreviusYears();
  return (
    <div className="flex justify-center pb-16 h-full">
      <div>
        <h1 className="text-4xl text-center drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
          Tidligere år på Elvebrus
        </h1>

        {previusYears.map((year) => {
          return (
            <div className="flex justify-center space-y-4 pb-8" key={year._id}>
              <div className="space-y-2">
                <Image
                  className="relative object-cover h-64 w-96 border-2 rounded-md"
                  width={600}
                  height={600}
                  src={urlFor(year.images[0]).url()}
                  alt={`Bilde fra året ${year.year}`}
                ></Image>
                <Link href={`/${year.slug}`}>
                  <h4 className="text-center text-2xl drop-shadow-[2px_2px_0px_rgba(0,0,0,1)] hover:underline underline-offset-2">
                    Sjekk ut {year.year}
                  </h4>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
