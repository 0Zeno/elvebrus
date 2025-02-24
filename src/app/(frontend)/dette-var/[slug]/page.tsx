import { urlFor } from "@/sanity/lib/image";
import { getPreviousYearBySlug } from "@/sanity/lib/queries/previusYearQuery";
import Image from "next/image";

export default async function Year({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { data: data } = await getPreviousYearBySlug(slug);

  return (
    <>
      <h2 className="text-4xl md:text-6xl text-center drop-shadow-[3px_3px_0px_rgba(0,0,0,1)] pb-8">
        Dette var året {data?.year}
      </h2>
      <div className="flex justify-center flex-wrap">
        {data?.lineup.artists.map((artist) => {
          return (
            <h4
              className="text-md md:text-2xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]"
              key={artist._id}
            >
              {`${artist.name}/`}
            </h4>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-2 pt-6">
        {data?.images.map((image) => {
          return (
            <Image
              key={image.asset?._id}
              src={urlFor(image).url()}
              alt={`bilde fre ${data.year}`}
              width={600}
              height={400}
              className="object-cover h-[18rem] w-[26rem]"
            ></Image>
          );
        })}
      </div>
    </>
  );
}
