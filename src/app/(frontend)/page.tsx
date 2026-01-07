import { CurrentLineup } from "@/components/current-lineup";
import { HeroSection } from "@/components/hero-section";
import { PreviusYears } from "@/components/previus-years";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex flex-col space-y-16">
          <div>
            <HeroSection />
            <div className="flex justify-center">
              <a href="/billetter">
                <Button className="font font-semibold text-md md:text-lg ">
                  <span className="drop-shadow-[1px_1px_0px_rgba(0,0,0,1)]"> 
                  Kjøp Billetter

                  </span>
                </Button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <CurrentLineup />
          </div>
          <div>
            <PreviusYears />
          </div>
        </div>
      </div>
    </main>
  );
}
