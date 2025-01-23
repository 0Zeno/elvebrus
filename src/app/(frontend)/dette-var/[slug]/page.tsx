import { urlFor } from "@/sanity/lib/image";
import { getPreviousYearBySlug } from "@/sanity/lib/queries/previusYearQuery";
import Image from "next/image";

export default async function Year({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const data = await getPreviousYearBySlug(slug);

  return (
    <>
      <h2 className="text-6xl text-center drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
        Dette var året {data?.year}
      </h2>
      <div className="flex justify-between flex-wrap">
        {data?.lineup.artists.map((artist) => {
          return (
            <h4
              className="text-2xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              key={artist._id}
            >
              {artist.name}
            </h4>
          );
        })}
      </div>

      <div className="container mx-auto px-5 pt-10">
        <div className="-m-1 flex flex-wrap md:-m-2">
          <div className="flex w-1/2 flex-wrap">
            <div className="w-1/2 p-1 ">
              <Image
                width={600}
                height={400}
                className="block h-full w-full  object-cover object-center"
                src={urlFor(data!.images[0]).url()}
                alt={`Bilde fra Elvebrus ${data?.year}`}
              ></Image>
            </div>
            <div className="w-1/2 p-1">
              <Image
                width={600}
                height={400}
                className="block h-full w-full  object-cover object-center"
                src={urlFor(data!.images[1]).url()}
                alt={`Bilde fra Elvebrus ${data?.year}`}
              ></Image>
            </div>
            <div className="w-full p-1 ">
              <Image
                width={600}
                height={400}
                className="block h-full w-full  object-cover object-center"
                src={urlFor(data!.images[2]).url()}
                alt={`Bilde fra Elvebrus ${data?.year}`}
              ></Image>
            </div>
          </div>
          <div className="flex w-1/2 flex-wrap">
            <div className="w-full p-1 ">
              <Image
                width={600}
                height={400}
                className="block h-full w-full  object-cover object-center"
                src={urlFor(data!.images[3]).url()}
                alt={`Bilde fra Elvebrus ${data?.year}`}
              ></Image>
            </div>
            <div className="w-1/2 p-1 ">
              <Image
                width={600}
                height={400}
                className="block h-full w-full  object-cover object-center"
                src={urlFor(data!.images[4]).url()}
                alt={`Bilde fra Elvebrus ${data?.year}`}
              ></Image>
            </div>
            <div className="w-1/2 p-1 ">
              <Image
                width={600}
                height={400}
                className="block h-full w-full  object-cover object-center"
                src={urlFor(data!.images[5]).url()}
                alt={`Bilde fra Elvebrus ${data?.year}`}
              ></Image>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
