import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex flex-col">
          {/*
        <div className="px-8 pb-12">
          <Image
            src={Stanghelle}
            alt={"stanghelle"}
            width={2400}
            height={2000}
            className="absolute h-[calc(100vh-6rem)] w-[calc(100vw-4rem)] object-cover -z-40 border-2 border-gray-500 rounded-md shadow-lg"
          ></Image>
        </div>
          */}
          <div className="pt-32 w-max text-center">
            <div className="flex justify-between">
              <h2 className="text-4xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                Stanghelle
              </h2>
              <h2 className="text-4xl drop-shadow-[3px_3px_0px_rgba(0,0,0,1)]">
                19.-20 juni
              </h2>
            </div>
            <h1 className="text-9xl pb-4 pt-10 drop-shadow-[5px_5px_0px_rgba(0,0,0,1)]">
              ELVEBRUS
            </h1>
          </div>
          <div className="flex justify-center">
            <a href="/biletter">
              <Button size="lg" className="mt-12 font font-semibold text-lg">
                Kjøp Biletter
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div></div>
    </main>
  );
}
