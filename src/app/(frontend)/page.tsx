import { CurrentLineup } from "@/components/current-lineup";
import { HeroSection } from "@/components/hero-section";
import { PreviusYears } from "@/components/previus-years";
import { Button } from "@/components/ui/button";

export default async function Page() {
  return (
    <main>
      <div className="flex justify-center">
        <div className="flex flex-col space-y-20">
          <div>
            <HeroSection />
            <div className="flex justify-center">
              <a href="/biletter">
                <Button className="font font-semibold text-md md:text-lg">
                  Kjøp Biletter
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
